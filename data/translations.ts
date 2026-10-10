import type { Locale } from "@/lib/i18n/config";
import type { CountryTranslation } from "@/lib/i18n/translation";
import { en as franceEn } from "./france/en";

/**
 * Translations of the French country files, per locale, keyed by canonical slug.
 * A country is published in a locale only once it has an entry here (and
 * `npm run validate:data` reports it complete). To translate a new country:
 * `npx tsx scripts/i18n/extract-translation.ts <slug>`, translate the generated
 * `data/<slug>/en.ts`, then register it below.
 */
export const TRANSLATIONS: Record<Exclude<Locale, "fr">, Record<string, CountryTranslation>> = {
  en: {
    france: franceEn,
  },
};
