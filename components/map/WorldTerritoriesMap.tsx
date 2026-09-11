"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as MapLibreMap, MapMouseEvent, MapGeoJSONFeature } from "maplibre-gl";
import "@/lib/maplibre-global";
import { computeCentroid } from "@/lib/geo-utils";

interface WorldTerritoriesMapProps {
  /** ISO A3 of the country's main/contiguous territory, highlighted like on the world explorer map. */
  mainIso: string;
  /** Shared GeoJSON of the country's overseas territories (see Country.territories.overseasMapGeojsonUrl). */
  overlayGeojsonUrl?: string;
  /** `mapGroupId` → display name, for every overseas territory to plot. */
  overlayLabels: Record<string, string>;
  className?: string;
}

interface HoverLabel {
  x: number;
  y: number;
  name: string;
}

/**
 * A whole-world view used to show where a country's overseas / non-contiguous
 * territories actually sit on the globe — generic: any country can pass its
 * own `mainIso` + overlay data, this isn't wired to France specifically.
 * Read-only (no click-to-navigate): it's a locator, not the country picker.
 */
export function WorldTerritoriesMap({ mainIso, overlayGeojsonUrl, overlayLabels, className }: WorldTerritoriesMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const [hover, setHover] = useState<HoverLabel | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const styles = getComputedStyle(document.documentElement);
    const surfaceMuted = styles.getPropertyValue("--surface-muted").trim() || "#f3f1ed";
    const border = styles.getPropertyValue("--border").trim() || "#e7e3db";
    const brand = styles.getPropertyValue("--brand").trim() || "#16233f";
    const surface = styles.getPropertyValue("--surface").trim() || "#ffffff";
    const accent = styles.getPropertyValue("--accent").trim() || "#b5122e";

    const map = new window.maplibregl.Map({
      container: containerRef.current,
      style: {
        version: 8,
        sources: {},
        layers: [{ id: "bg", type: "background", paint: { "background-color": surfaceMuted } }],
      },
      center: [10, 15],
      zoom: 0.6,
      minZoom: 0.4,
      maxZoom: 8,
      attributionControl: false,
      dragRotate: false,
      touchPitch: false,
      cooperativeGestures: true,
    });
    mapRef.current = map;
    map.addControl(new window.maplibregl.NavigationControl({ showCompass: false }), "top-right");
    map.fitBounds(
      [
        [-165, -56],
        [178, 78],
      ],
      { padding: 8, animate: false },
    );

    map.on("load", async () => {
      map.addSource("world", { type: "geojson", data: "/geo/world.json" });
      map.addLayer({
        id: "world-fill",
        type: "fill",
        source: "world",
        paint: {
          "fill-color": ["case", ["==", ["get", "iso_a3"], mainIso], brand, surface],
          "fill-opacity": ["case", ["==", ["get", "iso_a3"], mainIso], 0.85, 0.5],
        },
      });
      map.addLayer({
        id: "world-outline",
        type: "line",
        source: "world",
        paint: {
          "line-color": border,
          "line-width": ["case", ["==", ["get", "iso_a3"], mainIso], 1.4, 0.4],
        },
      });

      if (!overlayGeojsonUrl) return;
      const geojson: GeoJSON.FeatureCollection = await fetch(overlayGeojsonUrl).then((r) => r.json());
      const byGroup = new Map<string, GeoJSON.Feature[]>();
      geojson.features.forEach((f) => {
        const group = f.properties?.group as string | undefined;
        if (!group) return;
        if (!byGroup.has(group)) byGroup.set(group, []);
        byGroup.get(group)!.push(f);
      });

      const pointFeatures: GeoJSON.Feature[] = [];
      byGroup.forEach((feats, group) => {
        const centroid = computeCentroid(feats);
        if (!centroid) return;
        pointFeatures.push({
          type: "Feature",
          properties: { group, name: overlayLabels[group] ?? group },
          geometry: { type: "Point", coordinates: centroid },
        });
      });
      const points: GeoJSON.FeatureCollection = { type: "FeatureCollection", features: pointFeatures };

      map.addSource("overseas-shapes", { type: "geojson", data: geojson });
      map.addLayer({
        id: "overseas-fill",
        type: "fill",
        source: "overseas-shapes",
        paint: { "fill-color": accent, "fill-opacity": 0.8 },
      });
      map.addLayer({
        id: "overseas-line",
        type: "line",
        source: "overseas-shapes",
        paint: { "line-color": accent, "line-width": 1 },
      });

      map.addSource("overseas-points", { type: "geojson", data: points });
      map.addLayer({
        id: "overseas-points",
        type: "circle",
        source: "overseas-points",
        paint: {
          "circle-radius": 5,
          "circle-color": accent,
          "circle-stroke-color": surface,
          "circle-stroke-width": 1.5,
        },
      });

      const showLabel = (e: MapMouseEvent & { features?: MapGeoJSONFeature[] }) => {
        const name = e.features?.[0]?.properties?.name as string | undefined;
        if (!name) return;
        setHover({ x: e.point.x, y: e.point.y, name });
      };
      ["overseas-points", "overseas-fill"].forEach((layerId) => {
        map.on("mousemove", layerId, showLabel);
        map.on("mouseenter", layerId, () => (map.getCanvas().style.cursor = "pointer"));
        map.on("mouseleave", layerId, () => {
          map.getCanvas().style.cursor = "";
          setHover(null);
        });
        map.on("click", layerId, showLabel);
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainIso, overlayGeojsonUrl]);

  return (
    <div className={className} style={{ position: "relative" }}>
      <div ref={containerRef} className="size-full rounded-2xl" />
      {hover && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md border border-border bg-surface px-2 py-1 text-xs font-medium shadow-sm"
          style={{ left: hover.x, top: hover.y - 10 }}
        >
          {hover.name}
        </div>
      )}
    </div>
  );
}
