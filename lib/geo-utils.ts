/** Minimal geometry helpers shared by the small map components — no turf dependency needed for this. */

function visitCoords(coords: unknown, fn: (x: number, y: number) => void): void {
  const arr = coords as unknown[];
  if (typeof arr[0] === "number") {
    fn(arr[0] as number, arr[1] as number);
  } else {
    arr.forEach((c) => visitCoords(c, fn));
  }
}

export function computeBounds(features: GeoJSON.Feature[]): [[number, number], [number, number]] | null {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  features.forEach((f) => {
    const geom = f.geometry as GeoJSON.Polygon | GeoJSON.MultiPolygon;
    if (!("coordinates" in geom)) return;
    visitCoords(geom.coordinates, (x, y) => {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    });
  });
  if (!Number.isFinite(minX)) return null;
  return [
    [minX, minY],
    [maxX, maxY],
  ];
}

/** Centroid approximated as the bounding-box center — good enough to place a marker, not for precise area work. */
export function computeCentroid(features: GeoJSON.Feature[]): [number, number] | null {
  const bounds = computeBounds(features);
  if (!bounds) return null;
  const [[minX, minY], [maxX, maxY]] = bounds;
  return [(minX + maxX) / 2, (minY + maxY) / 2];
}
