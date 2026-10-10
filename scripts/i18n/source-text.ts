import { createHash } from "node:crypto";
import type { Country } from "../../lib/types";
import { NON_TEXT_KEYS } from "../../lib/i18n/translation";

/** Identity fields come from the registry and lib/i18n/country-names-en.ts, not from a translation file. */
const IDENTITY_KEYS = ["id", "slug", "name", "nameWithArticle", "flag", "status", "continent", "wikidataId", "currencyCode", "maps"];

/** The part of a country a translation file mirrors. */
export function translatableSource(country: Country): Record<string, unknown> {
  return Object.fromEntries(Object.entries(country).filter(([key]) => !IDENTITY_KEYS.includes(key)));
}

/** Fingerprint of the French text only (numbers excluded), to spot translations left behind by a data edit. */
export function sourceTextHash(country: Country): string {
  const strings: string[] = [];
  const walk = (value: unknown) => {
    if (typeof value === "string") strings.push(value);
    else if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === "object") {
      for (const [key, v] of Object.entries(value)) if (!NON_TEXT_KEYS.has(key)) walk(v);
    }
  };
  walk(translatableSource(country));
  return createHash("sha256").update(strings.join("\u0000")).digest("hex").slice(0, 12);
}
