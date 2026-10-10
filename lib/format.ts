import { type Locale, INTL_LOCALE } from "@/lib/i18n/config";

const NBSP = " ";

/** Large-number suffixes per locale: "69,1 M" / "3 366 Md USD" in French, "69.1M" / "3,366 bn USD" in English. */
const SCALE: Record<Locale, { million: string; billion: string }> = {
  fr: { million: `${NBSP}M`, billion: `${NBSP}Md` },
  en: { million: "M", billion: `${NBSP}bn` },
};

function toLocale(value: number, locale: Locale, options: Intl.NumberFormatOptions): string {
  return value.toLocaleString(INTL_LOCALE[locale], options).replace(/\s/g, NBSP);
}

/** Formats big numbers the editorial way: "69,1 M", "552 000" (fr) / "69.1M", "552,000" (en). Uses non-breaking spaces so the value never wraps mid-number. */
export function formatCompact(value: number, decimals = 1, locale: Locale = "fr"): string {
  const abs = Math.abs(value);
  if (abs >= 1_000_000) {
    const n = toLocale(value / 1_000_000, locale, { maximumFractionDigits: decimals, minimumFractionDigits: 0 });
    return `${n}${SCALE[locale].million}`;
  }
  if (abs >= 1_000) {
    return toLocale(value, locale, { maximumFractionDigits: 0 });
  }
  return toLocale(value, locale, { maximumFractionDigits: decimals });
}

export function formatNumber(value: number, decimals = 0, locale: Locale = "fr"): string {
  return toLocale(value, locale, { maximumFractionDigits: decimals });
}

/** "22,2 %" in French, "22.2%" in English. */
export function formatPercent(value: number, decimals = 0, locale: Locale = "fr"): string {
  const n = toLocale(value, locale, { maximumFractionDigits: decimals });
  return locale === "fr" ? `${n}${NBSP}%` : `${n}%`;
}

/** Wraps a value and unit so they never split across lines. */
export function withUnit(value: string, unit: string): string {
  return `${value}${NBSP}${unit}`;
}

/**
 * Formats a raw currency amount the editorial way, auto-scaling to
 * billions/millions so a value never overflows its display regardless of
 * whether it's a small per-capita figure or a country's full GDP in raw units:
 * "3 366,3 Md USD", "48 986 €" (fr) / "3,366.3 bn USD", "48,986 €" (en).
 */
export function formatCurrencyCompact(value: number, currency: string, decimals = 1, locale: Locale = "fr"): string {
  const abs = Math.abs(value);
  if (abs >= 1_000_000_000) {
    const n = toLocale(value / 1_000_000_000, locale, { maximumFractionDigits: decimals, minimumFractionDigits: 0 });
    return `${n}${SCALE[locale].billion}${NBSP}${currency}`;
  }
  if (abs >= 1_000_000) {
    const n = toLocale(value / 1_000_000, locale, { maximumFractionDigits: decimals, minimumFractionDigits: 0 });
    return `${n}${NBSP}M${NBSP}${currency}`;
  }
  return withUnit(formatNumber(value, 0, locale), currency);
}

/** Replaces normal spaces with a non-breaking space so a short label never wraps awkwardly. */
export function nowrap(text: string): string {
  return text.replace(/ /g, NBSP);
}

/**
 * "de" + a country's `nameWithArticle`, with French contraction/elision:
 * "le Japon" → "du Japon", "les Pays-Bas" → "des Pays-Bas",
 * "Israël" → "d'Israël", "la France" / "l'Iran" / "Malte" → "de la France"…
 */
export function deCountry(nameWithArticle: string): string {
  if (nameWithArticle.startsWith("le ")) return `du ${nameWithArticle.slice(3)}`;
  if (nameWithArticle.startsWith("les ")) return `des ${nameWithArticle.slice(4)}`;
  if (/^[aeiouyàâäéèêëîïôöùûüœAEIOUYÀÂÄÉÈÊËÎÏÔÖÙÛÜŒ]/.test(nameWithArticle)) return `d'${nameWithArticle}`;
  return `de ${nameWithArticle}`;
}
