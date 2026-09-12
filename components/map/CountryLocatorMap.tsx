"use client";

import { useEffect, useRef } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";
import { loadMapLibre } from "@/lib/maplibre-global";
import type { CountryMaps } from "@/lib/types";

const GLYPHS = "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf";

/**
 * A longitude span this wide only happens when a country's outline wraps the
 * antimeridian (e.g. the US's Aleutian islands) — naively fitting to it would
 * zoom out to show mostly ocean, so we fall back to the country's authored
 * `center`/`zoom` instead (already tuned by hand for exactly this case).
 */
const ANTIMERIDIAN_SPAN_THRESHOLD = 100;

type Bbox = [number, number, number, number]; // [minLon, minLat, maxLon, maxLat]

function extendBbox(bbox: Bbox, coords: unknown): void {
  if (typeof (coords as unknown[])[0] === "number") {
    const [lon, lat] = coords as [number, number];
    if (lon < bbox[0]) bbox[0] = lon;
    if (lat < bbox[1]) bbox[1] = lat;
    if (lon > bbox[2]) bbox[2] = lon;
    if (lat > bbox[3]) bbox[3] = lat;
  } else {
    for (const c of coords as unknown[]) extendBbox(bbox, c);
  }
}

async function fetchOutlineBbox(url: string): Promise<Bbox | null> {
  const res = await fetch(url);
  if (!res.ok) return null;
  const geojson = await res.json();
  const bbox: Bbox = [Infinity, Infinity, -Infinity, -Infinity];
  for (const feature of geojson.features ?? []) extendBbox(bbox, feature.geometry.coordinates);
  return Number.isFinite(bbox[0]) ? bbox : null;
}

interface CountryLocatorMapProps {
  /** ISO 3166-1 alpha-3 code — matches `properties.iso_a3` in /geo/world.json. */
  iso3: string;
  maps: CountryMaps;
  capital: { name: string; lat: number; lon: number };
  className?: string;
}

/**
 * A world map zoomed in on one country: every country is drawn in a light,
 * uniform tone, the one this page is about is picked out in a darker shade,
 * and its capital is marked and labeled. The initial view fits the country's
 * own outline so the whole territory reads at a glance regardless of its
 * size or shape — no per-country zoom tuning needed. Fully navigable
 * (drag/scroll/zoom) so a visitor can zoom back out to see the country's
 * place in the world.
 */
export function CountryLocatorMap({ iso3, maps, capital, className }: CountryLocatorMapProps) {
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
    const foreground = styles.getPropertyValue("--foreground").trim() || "#14171c";
    const accent = styles.getPropertyValue("--accent").trim() || "#b5122e";

    loadMapLibre().then((maplibregl) => {
      if (cancelled || !containerRef.current) return;

      const map = new maplibregl.Map({
        container: containerRef.current,
        style: {
          version: 8,
          glyphs: GLYPHS,
          sources: {},
          layers: [{ id: "bg", type: "background", paint: { "background-color": surfaceMuted } }],
        },
        center: maps.center,
        zoom: maps.zoom,
        minZoom: 0.5,
        maxZoom: maps.maxZoom ?? 9,
        attributionControl: { compact: true },
        cooperativeGestures: true,
      });
      mapRef.current = map;
      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

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

        map.addSource("capital", {
          type: "geojson",
          data: { type: "Feature", geometry: { type: "Point", coordinates: [capital.lon, capital.lat] }, properties: { name: capital.name } },
        });
        map.addLayer({
          id: "capital-circle",
          type: "circle",
          source: "capital",
          paint: {
            "circle-radius": 5,
            "circle-color": accent,
            "circle-stroke-color": surface,
            "circle-stroke-width": 1.5,
          },
        });
        map.addLayer({
          id: "capital-label",
          type: "symbol",
          source: "capital",
          layout: {
            "text-field": ["get", "name"],
            "text-font": ["Noto Sans Regular"],
            "text-size": 12,
            "text-offset": [0, 1.2],
            "text-anchor": "top",
          },
          paint: { "text-color": foreground, "text-halo-color": surface, "text-halo-width": 1.3 },
        });

        fetchOutlineBbox(maps.outlineGeojsonUrl).then((bbox) => {
          if (cancelled || !mapRef.current) return;
          if (bbox && bbox[2] - bbox[0] < ANTIMERIDIAN_SPAN_THRESHOLD) {
            mapRef.current.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]], {
              padding: 28,
              animate: false,
              maxZoom: maps.maxZoom ?? 9,
            });
          } else {
            mapRef.current.jumpTo({ center: maps.center, zoom: maps.zoom });
          }
        });
      });
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iso3, maps, capital.name, capital.lat, capital.lon]);

  return <div ref={containerRef} className={className} />;
}
