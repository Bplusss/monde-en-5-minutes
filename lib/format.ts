const NBSP = " ";

/** Formats big numbers the French editorial way: "69,1 M", "552 000". Uses non-breaking spaces so the value never wraps mid-number. */
export function formatCompact(value: number, decimals = 1): string {
  const abs = Math.abs(value);
  if (abs >= 1_000_000) {
    const n = (value / 1_000_000).toLocaleString("fr-FR", { maximumFractionDigits: decimals, minimumFractionDigits: 0 });
    return `${n}${NBSP}M`;
  }
  if (abs >= 1_000) {
    return value.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/\s/g, NBSP);
  }
  return value.toLocaleString("fr-FR", { maximumFractionDigits: decimals });
}

export function formatNumber(value: number, decimals = 0): string {
  return value.toLocaleString("fr-FR", { maximumFractionDigits: decimals }).replace(/\s/g, NBSP);
}

export function formatPercent(value: number, decimals = 0): string {
  return `${value.toLocaleString("fr-FR", { maximumFractionDigits: decimals })}${NBSP}%`;
}

/** Wraps a value and unit so they never split across lines. */
export function withUnit(value: string, unit: string): string {
  return `${value}${NBSP}${unit}`;
}

/** Replaces normal spaces with a non-breaking space so a short label never wraps awkwardly. */
export function nowrap(text: string): string {
  return text.replace(/ /g, NBSP);
}
