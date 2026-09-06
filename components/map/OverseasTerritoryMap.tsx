"use client";

import { useEffect, useRef } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";
import "@/lib/maplibre-global";
import { computeBounds } from "@/lib/geo-utils";

const GLYPHS = "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf";

interface OverseasTerritoryMapProps {
  /** Shared GeoJSON source (see Country.territories.overseasMapGeojsonUrl); features are tagged with a `group` property. */
  geojsonUrl: string;
  /** Matches this territory's features' `group` property. */
  groupId: string;
  className?: string;
}

/**
 * A generic inset map for a country's overseas / non-contiguous territory —
 * finds the matching feature(s) in a shared GeoJSON file by `groupId` and
 * frames the map on their real geometry. Not France-specific: any country
 * whose data supplies `overseasMapGeojsonUrl` + `mapGroupId` can use it.
 */
export function OverseasTerritoryMap({ geojsonUrl, groupId, className }: OverseasTerritoryMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const styles = getComputedStyle(document.documentElement);
    const surfaceMuted = styles.getPropertyValue("--surface-muted").trim() || "#f3f1ed";
    const brand = styles.getPropertyValue("--brand").trim() || "#16233f";

    const map = new window.maplibregl.Map({
      container: containerRef.current,
      style: {
        version: 8,
        glyphs: GLYPHS,
        sources: {},
        layers: [{ id: "bg", type: "background", paint: { "background-color": surfaceMuted } }],
      },
      center: [0, 0],
      zoom: 1,
      attributionControl: false,
      interactive: false,
    });
    mapRef.current = map;

    map.on("load", async () => {
      const geojson: GeoJSON.FeatureCollection = await fetch(geojsonUrl).then((r) => r.json());
      const features = geojson.features.filter((f) => f.properties?.group === groupId);
      if (!features.length) return;

      map.addSource("territory", { type: "geojson", data: { type: "FeatureCollection", features } });
      map.addLayer({
        id: "territory-fill",
        type: "fill",
        source: "territory",
        paint: { "fill-color": brand, "fill-opacity": 0.75 },
      });
      map.addLayer({
        id: "territory-line",
        type: "line",
        source: "territory",
        paint: { "line-color": brand, "line-width": 1 },
      });

      const bounds = computeBounds(features);
      if (bounds) map.fitBounds(bounds, { padding: 18, animate: false, maxZoom: 9 });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [geojsonUrl, groupId]);

  return <div ref={containerRef} className={className} />;
}
