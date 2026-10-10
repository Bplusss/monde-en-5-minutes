import type { Locale } from "@/lib/i18n/config";
import type { CountryTranslation } from "@/lib/i18n/translation";
import { en as franceEn } from "./france/en";
import { en as etatsUnisEn } from "./etats-unis/en";
import { en as royaumeUniEn } from "./royaume-uni/en";
import { en as canadaEn } from "./canada/en";
import { en as australieEn } from "./australie/en";
import { en as indeEn } from "./inde/en";
import { en as allemagneEn } from "./germany/en";
import { en as italieEn } from "./italy/en";
import { en as japonEn } from "./japon/en";
import { en as nigeriaEn } from "./nigeria/en";
import { en as kenyaEn } from "./kenya/en";

/**
 * Translations of the French country files, per locale, keyed by canonical slug.
 * A country is published in a locale only once it has an entry here (and
 * `npm run validate:data` reports it complete). To translate a new country:
 * `npx tsx scripts/i18n/extract-translation.ts <slug>`, translate the generated
 * `data/<folder>/en.ts`, then register it below.
 */
export const TRANSLATIONS: Record<Exclude<Locale, "fr">, Record<string, CountryTranslation>> = {
  en: {
    france: franceEn,
    "etats-unis": etatsUnisEn,
    "royaume-uni": royaumeUniEn,
    canada: canadaEn,
    australie: australieEn,
    inde: indeEn,
    allemagne: allemagneEn,
    italie: italieEn,
    japon: japonEn,
    nigeria: nigeriaEn,
    kenya: kenyaEn,
  },
};
