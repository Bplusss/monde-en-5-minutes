"use client";

import { useEffect, useRef } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";
import "@/lib/maplibre-global";
import type { City, CountryMaps, River } from "@/lib/types";
import { formatNumber } from "@/lib/format";

const GLYPHS = "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf";

export type CountryMapLayer = "outline" | "regions" | "cities" | "rivers";

interface CountryMapProps {
  maps: CountryMaps;
  layer: CountryMapLayer;
  className?: string;
  cities?: City[];
  rivers?: River[];
}

/**
 * The single map component every country page uses — outline, regions,
 * cities and rivers all read from `Country.maps` / `Country.cities` /
 * `Country.rivers`, so a new country needs new data, never a new component.
 */
export function CountryMap({ maps, layer, className, cities = [], rivers = [] }: CountryMapProps) {
  const { center, zoom } = maps;
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const styles = getComputedStyle(document.documentElement);
    const surfaceMuted = styles.getPropertyValue("--surface-muted").trim() || "#f3f1ed";
    const border = styles.getPropertyValue("--border").trim() || "#e7e3db";
    const brand = styles.getPropertyValue("--brand").trim() || "#16233f";
    const foreground = styles.getPropertyValue("--foreground").trim() || "#14171c";
    const surface = styles.getPropertyValue("--surface").trim() || "#ffffff";
    const accent = styles.getPropertyValue("--accent").trim() || "#b5122e";

    const map = new window.maplibregl.Map({
      container: containerRef.current,
      style: {
        version: 8,
        glyphs: GLYPHS,
        sources: {},
        layers: [{ id: "bg", type: "background", paint: { "background-color": surfaceMuted } }],
      },
      center,
      zoom,
      minZoom: Math.max(zoom - 1.2, 0),
      maxZoom: 9,
      attributionControl: { compact: true },
      dragRotate: false,
      touchPitch: false,
    });
    mapRef.current = map;
    map.addControl(new window.maplibregl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      map.addSource("outline", { type: "geojson", data: maps.outlineGeojsonUrl });
      map.addLayer({
        id: "outline-fill",
        type: "fill",
        source: "outline",
        paint: { "fill-color": brand, "fill-opacity": 0.08 },
      });
      map.addLayer({
        id: "outline-line",
        type: "line",
        source: "outline",
        paint: { "line-color": brand, "line-width": 1.4 },
      });

      if (layer === "regions" && maps.regionsGeojsonUrl) {
        map.addSource("regions", { type: "geojson", data: maps.regionsGeojsonUrl, generateId: true });
        map.addLayer({
          id: "regions-fill",
          type: "fill",
          source: "regions",
          paint: {
            "fill-color": brand,
            "fill-opacity": ["case", ["boolean", ["feature-state", "hover"], false], 0.35, 0.12],
          },
        });
        map.addLayer({
          id: "regions-line",
          type: "line",
          source: "regions",
          paint: { "line-color": border, "line-width": 1 },
        });
        map.addLayer({
          id: "regions-label",
          type: "symbol",
          source: "regions",
          layout: {
            "text-field": ["get", "name"],
            "text-font": ["Noto Sans Regular"],
            "text-size": 11,
          },
          paint: { "text-color": foreground, "text-halo-color": surface, "text-halo-width": 1.3 },
        });

        let hoveredId: string | number | undefined;
        map.on("mousemove", "regions-fill", (e) => {
          map.getCanvas().style.cursor = "pointer";
          const f = e.features?.[0];
          if (!f) return;
          if (hoveredId !== undefined) map.setFeatureState({ source: "regions", id: hoveredId }, { hover: false });
          hoveredId = f.id;
          if (hoveredId !== undefined) map.setFeatureState({ source: "regions", id: hoveredId }, { hover: true });
        });
        map.on("mouseleave", "regions-fill", () => {
          map.getCanvas().style.cursor = "";
          if (hoveredId !== undefined) map.setFeatureState({ source: "regions", id: hoveredId }, { hover: false });
          hoveredId = undefined;
        });
      }

      if (layer === "rivers" && maps.riversGeojsonUrl) {
        map.addSource("rivers", { type: "geojson", data: maps.riversGeojsonUrl });
        map.addLayer({
          id: "rivers-line",
          type: "line",
          source: "rivers",
          paint: { "line-color": "#2f7fd1", "line-width": 2.2 },
        });
        map.on("mouseenter", "rivers-line", () => (map.getCanvas().style.cursor = "pointer"));
        map.on("mouseleave", "rivers-line", () => (map.getCanvas().style.cursor = ""));
        map.on("click", "rivers-line", (e) => {
          const name = e.features?.[0]?.properties?.name as string | undefined;
          const river = rivers.find((r) => r.name === name);
          if (!river) return;
          new window.maplibregl.Popup({ closeButton: true, maxWidth: "220px" })
            .setLngLat(e.lngLat)
            .setHTML(
              `<div style="font-family:inherit">
                <div style="font-weight:600;margin-bottom:4px">${river.name}</div>
                <div style="font-size:12px;line-height:1.5;opacity:.85">
                  ${formatNumber(river.lengthKm.value)}&nbsp;km<br/>
                  Source&nbsp;: ${river.source_location}<br/>
                  Embouchure&nbsp;: ${river.mouth}
                </div>
              </div>`,
            )
            .addTo(map);
        });
      }

      if (layer === "cities" && cities.length) {
        const fc: GeoJSON.FeatureCollection = {
          type: "FeatureCollection",
          features: cities.map((c) => ({
            type: "Feature",
            properties: { name: c.name, population: c.population?.value ?? 0, isCapital: !!c.isCapital },
            geometry: { type: "Point", coordinates: [c.lon, c.lat] },
          })),
        };
        map.addSource("cities", { type: "geojson", data: fc });
        map.addLayer({
          id: "cities-circle",
          type: "circle",
          source: "cities",
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["get", "population"], 200_000, 5, 2_100_000, 18],
            "circle-color": ["case", ["get", "isCapital"], accent, brand],
            "circle-opacity": 0.85,
            "circle-stroke-color": surface,
            "circle-stroke-width": 1.5,
          },
        });
        map.addLayer({
          id: "cities-label",
          type: "symbol",
          source: "cities",
          layout: {
            "text-field": ["get", "name"],
            "text-font": ["Noto Sans Regular"],
            "text-size": 11,
            "text-offset": [0, 1.2],
            "text-anchor": "top",
          },
          paint: { "text-color": foreground, "text-halo-color": surface, "text-halo-width": 1.3 },
        });
        map.on("mouseenter", "cities-circle", () => (map.getCanvas().style.cursor = "pointer"));
        map.on("mouseleave", "cities-circle", () => (map.getCanvas().style.cursor = ""));
        map.on("click", "cities-circle", (e) => {
          const p = e.features?.[0]?.properties;
          if (!p) return;
          new window.maplibregl.Popup({ closeButton: true, maxWidth: "200px" })
            .setLngLat(e.lngLat)
            .setHTML(
              `<div style="font-weight:600;margin-bottom:2px">${p.name}</div><div style="font-size:12px;opacity:.85">${formatNumber(p.population)} habitants</div>`,
            )
            .addTo(map);
        });
      }
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maps, layer]);

  return <div ref={containerRef} className={className} />;
}
