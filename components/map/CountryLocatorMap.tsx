"use client";

import { useEffect, useRef } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";
import { loadMapLibre } from "@/lib/maplibre-global";

const WORLD_BOUNDS: [[number, number], [number, number]] = [
  [-165, -56],
  [178, 78],
];

interface CountryLocatorMapProps {
  /** ISO 3166-1 alpha-3 code — matches `properties.iso_a3` in /geo/world.json. */
  iso3: string;
  /** [lon, lat] to center the world view on — the country's own map center. */
  center: [number, number];
  className?: string;
}

/**
 * A quiet, non-interactive world map showing where a country sits on the
 * globe: every country is drawn in a light, uniform tone, and the one this
 * page is about is picked out in a darker shade and kept at the center of
 * the view. Purely orientational — no hover, no click, no zoom controls.
 */
export function CountryLocatorMap({ iso3, center, className }: CountryLocatorMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let cancelled = false;

    const styles = getComputedStyle(document.documentElement);
    const surfaceMuted = styles.getPropertyValue("--surface-muted").trim() || "#f3f1ed";
    const muted = styles.getPropertyValue("--muted").trim() || "#6b7178";
    const brand = styles.getPropertyValue("--brand").trim() || "#16233f";
    const surface = styles.getPropertyValue("--surface").trim() || "#ffffff";

    loadMapLibre().then((maplibregl) => {
      if (cancelled || !containerRef.current) return;

      const map = new maplibregl.Map({
        container: containerRef.current,
        style: {
          version: 8,
          sources: {},
          layers: [{ id: "bg", type: "background", paint: { "background-color": surfaceMuted } }],
        },
        center: [0, 15],
        zoom: 0.5,
        interactive: false,
        attributionControl: { compact: true },
      });
      mapRef.current = map;

      map.on("load", () => {
        map.addSource("world", { type: "geojson", data: "/geo/world.json" });

        map.addLayer({
          id: "world-fill",
          type: "fill",
          source: "world",
          paint: {
            "fill-color": ["case", ["==", ["get", "iso_a3"], iso3], brand, muted],
            "fill-opacity": ["case", ["==", ["get", "iso_a3"], iso3], 0.65, 0.16],
          },
        });
        map.addLayer({
          id: "world-line",
          type: "line",
          source: "world",
          paint: {
            "line-color": ["case", ["==", ["get", "iso_a3"], iso3], brand, muted],
            "line-width": ["case", ["==", ["get", "iso_a3"], iso3], 1.2, 0.5],
            "line-opacity": ["case", ["==", ["get", "iso_a3"], iso3], 1, 0.35],
          },
        });

        // A microstate's fill is imperceptible at world scale, so a marker at its
        // center guarantees the country is still visible regardless of its size.
        map.addSource("target-point", {
          type: "geojson",
          data: { type: "Feature", geometry: { type: "Point", coordinates: center }, properties: {} },
        });
        map.addLayer({
          id: "target-point-circle",
          type: "circle",
          source: "target-point",
          paint: {
            "circle-radius": 4,
            "circle-color": brand,
            "circle-stroke-color": surface,
            "circle-stroke-width": 1.5,
          },
        });

        // fitBounds picks the zoom that fits the whole world in this container's
        // aspect ratio; we keep that zoom but recenter on the country so it sits
        // in the middle of the (still fully visible) world.
        map.fitBounds(WORLD_BOUNDS, { padding: 8, animate: false });
        map.jumpTo({ center, zoom: map.getZoom() });
      });
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iso3, center[0], center[1]]);

  return <div ref={containerRef} className={className} />;
}
