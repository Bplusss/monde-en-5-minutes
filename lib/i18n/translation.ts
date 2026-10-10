import type { Country } from "@/lib/types";

/**
 * A country translation is an overlay on the French source data: it mirrors the
 * shape of `Country` but only carries text. Numbers, years, URLs, ids and map
 * keys always come from the French file, so a translation can never drift from
 * the figures.
 *
 * - Objects: only the text keys, all optional in the type — completeness is
 *   enforced by `findTranslationIssues` (run by `npm run validate:data`).
 * - Arrays: same length and order as the source array.
 * - `source` and `unit` strings repeat a lot (one per statistic), so they're not
 *   translated in place but through the `sources` / `units` glossaries
 *   (French → English), on top of the shared ones in `lib/i18n/glossary-en.ts`.
 */

/** Keys whose values are identifiers, enums or non-linguistic data — never translated. */
export const NON_TEXT_KEYS = new Set([
  "id",
  "slug",
  "code",
  "kind",
  "flag",
  "status",
  "symbol",
  "sourceUrl",
  "mapGroupId",
  "overseasMapGeojsonUrl",
  "endYear",
  "wikidataId",
  "currencyCode",
  "continent",
  "maps",
]);

/** Keys translated through a glossary rather than in place. */
export const GLOSSARY_KEYS = { source: "sources", unit: "units" } as const;

/** Top-level `Country` fields that come from the registry, not from the translation file. */
type IdentityKey = "id" | "slug" | "name" | "nameWithArticle" | "flag" | "status" | "continent" | "wikidataId" | "currencyCode" | "maps";
type ExcludedKey = "kind" | "code" | "symbol" | "sourceUrl" | "mapGroupId" | "overseasMapGeojsonUrl" | "endYear" | "source" | "unit";

type Text<T> = [T] extends [string]
  ? string
  : T extends readonly (infer U)[]
    ? Text<U>[]
    : T extends object
      ? { [K in keyof T as K extends ExcludedKey ? never : [Text<NonNullable<T[K]>>] extends [never] ? never : K]?: Text<NonNullable<T[K]>> }
      : T extends string
        ? string
        : never;

export type CountryTranslation = Text<Omit<Country, IdentityKey>> & {
  /** Fingerprint of the French text this translation was made from (see scripts/i18n/source-text.ts). */
  sourceHash?: string;
  /** French source name → English, for this country's `source` fields not covered by the shared glossary. */
  sources?: Record<string, string>;
  /** French unit → English, for this country's `unit` fields not covered by the shared glossary. */
  units?: Record<string, string>;
};

export interface Glossaries {
  sources: Record<string, string>;
  units: Record<string, string>;
}

/** Deep-merges a translation overlay onto a value of the French source data. */
export function applyTranslation<T>(base: T, overlay: unknown, glossaries: Glossaries): T {
  if (Array.isArray(base)) {
    const items = Array.isArray(overlay) ? overlay : [];
    return base.map((item, i) => applyTranslation(item, items[i], glossaries)) as T;
  }
  if (base && typeof base === "object") {
    const over = (overlay && typeof overlay === "object" ? overlay : {}) as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(base)) {
      if (key in GLOSSARY_KEYS && typeof value === "string") {
        out[key] = glossaries[GLOSSARY_KEYS[key as keyof typeof GLOSSARY_KEYS]][value] ?? value;
      } else if (NON_TEXT_KEYS.has(key)) {
        out[key] = value;
      } else {
        out[key] = applyTranslation(value, over[key], glossaries);
      }
    }
    return out as T;
  }
  if (typeof base === "string" && typeof overlay === "string") return overlay as T;
  return base;
}

/**
 * Structural check of an overlay against its source: every text string must be
 * translated, arrays must line up, and no key may exist that the source lacks.
 * Returns human-readable issues (empty = complete).
 */
export function findTranslationIssues(base: unknown, overlay: unknown, glossaries: Glossaries, path: string): string[] {
  const issues: string[] = [];
  const reportedGlossaryValues = new Set<string>();

  function walk(b: unknown, o: unknown, p: string) {
    if (Array.isArray(b)) {
      if (!Array.isArray(o)) {
        if (containsText(b)) issues.push(`${p} : traduction manquante (tableau attendu).`);
        return;
      }
      if (o.length !== b.length) issues.push(`${p} : ${o.length} élément(s) traduit(s) pour ${b.length} dans la source.`);
      b.forEach((item, i) => walk(item, o[i], `${p}[${i}]`));
      return;
    }
    if (b && typeof b === "object") {
      if (o !== undefined && (typeof o !== "object" || o === null || Array.isArray(o))) {
        issues.push(`${p} : objet attendu.`);
        return;
      }
      const over = (o ?? {}) as Record<string, unknown>;
      for (const key of Object.keys(over)) {
        if (!(key in b) || NON_TEXT_KEYS.has(key) || key in GLOSSARY_KEYS) issues.push(`${p}.${key} : clé inattendue dans la traduction.`);
      }
      for (const [key, value] of Object.entries(b)) {
        if (key in GLOSSARY_KEYS && typeof value === "string") {
          const glossary = glossaries[GLOSSARY_KEYS[key as keyof typeof GLOSSARY_KEYS]];
          const glossaryName = GLOSSARY_KEYS[key as keyof typeof GLOSSARY_KEYS];
          if (value && glossary[value] === undefined && !reportedGlossaryValues.has(`${glossaryName}:${value}`)) {
            reportedGlossaryValues.add(`${glossaryName}:${value}`);
            issues.push(`${p}.${key} : « ${value} » absent du glossaire "${glossaryName}".`);
          }
        } else if (!NON_TEXT_KEYS.has(key)) {
          walk(value, over[key], `${p}.${key}`);
        }
      }
      return;
    }
    if (typeof b === "string" && b.trim() !== "" && typeof o !== "string") {
      issues.push(`${p} : texte non traduit (« ${b.length > 60 ? `${b.slice(0, 57)}…` : b} »).`);
    }
  }

  walk(base, overlay, path);
  return issues;
}

function containsText(value: unknown): boolean {
  if (typeof value === "string") return value.trim() !== "";
  if (Array.isArray(value)) return value.some(containsText);
  if (value && typeof value === "object") {
    return Object.entries(value).some(([k, v]) => !NON_TEXT_KEYS.has(k) && !(k in GLOSSARY_KEYS) && containsText(v));
  }
  return false;
}
