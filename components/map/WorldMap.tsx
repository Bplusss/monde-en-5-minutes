"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Map as MapLibreMap, MapGeoJSONFeature } from "maplibre-gl";
import "@/lib/maplibre-global";
import { getCountryByIso3 } from "@/data/countries-registry";

interface WorldMapProps {
  className?: string;
}

interface HoverLabel {
  x: number;
  y: number;
  name: string;
}

/**
 * A deliberately quiet world map: no permanent country labels, no visual
 * hint of which countries are ready — every country is equally clickable,
 * discovery happens on click. Hovering tints the country under the cursor
 * and shows its name in a small floating tag.
 */
export function WorldMap({ className }: WorldMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const router = useRouter();
  const [toast, setToast] = useState<string | null>(null);
  const [hover, setHover] = useState<HoverLabel | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const styles = getComputedStyle(document.documentElement);
    const surfaceMuted = styles.getPropertyValue("--surface-muted").trim() || "#f3f1ed";
    const brand = styles.getPropertyValue("--brand").trim() || "#16233f";
    const muted = styles.getPropertyValue("--muted").trim() || "#6b7178";

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
      attributionControl: { compact: true },
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

    map.on("load", () => {
      map.addSource("world", { type: "geojson", data: "/geo/world.json", generateId: true });

      map.addLayer({
        id: "world-fill",
        type: "fill",
        source: "world",
        paint: {
          "fill-color": ["case", ["boolean", ["feature-state", "hover"], false], brand, muted],
          "fill-opacity": ["case", ["boolean", ["feature-state", "hover"], false], 0.9, 0.22],
        },
      });

      map.addLayer({
        id: "world-outline",
        type: "line",
        source: "world",
        paint: {
          "line-color": ["case", ["boolean", ["feature-state", "hover"], false], brand, muted],
          "line-width": ["case", ["boolean", ["feature-state", "hover"], false], 1.6, 0.7],
          "line-opacity": ["case", ["boolean", ["feature-state", "hover"], false], 1, 0.55],
        },
      });

      let hoveredId: string | number | undefined;
      map.on("mousemove", "world-fill", (e) => {
        map.getCanvas().style.cursor = "pointer";
        const f = e.features?.[0];
        if (!f) return;
        if (hoveredId !== f.id) {
          if (hoveredId !== undefined) map.setFeatureState({ source: "world", id: hoveredId }, { hover: false });
          hoveredId = f.id;
          if (hoveredId !== undefined) map.setFeatureState({ source: "world", id: hoveredId }, { hover: true });
        }
        setHover({ x: e.point.x, y: e.point.y, name: (f.properties?.name_fr as string) ?? "" });
      });
      map.on("mouseleave", "world-fill", () => {
        map.getCanvas().style.cursor = "";
        if (hoveredId !== undefined) map.setFeatureState({ source: "world", id: hoveredId }, { hover: false });
        hoveredId = undefined;
        setHover(null);
      });

      map.on("click", "world-fill", (e) => {
        const f = e.features?.[0] as MapGeoJSONFeature | undefined;
        const iso = f?.properties?.iso_a3 as string | undefined;
        const name = (f?.properties?.name_fr as string | undefined) ?? "Ce pays";
        const country = iso ? getCountryByIso3(iso) : undefined;
        if (country?.status === "available") {
          router.push(`/${country.slug}`);
        } else {
          setToast(`${name} — bientôt disponible`);
          window.clearTimeout((map as unknown as { _toastTimer?: number })._toastTimer);
          (map as unknown as { _toastTimer?: number })._toastTimer = window.setTimeout(() => setToast(null), 2200);
        }
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {toast && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}
