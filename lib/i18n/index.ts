import type { Locale } from "./config";
import { fr, type Dictionary } from "./dictionaries/fr";
import { en } from "./dictionaries/en";

export * from "./config";
export type { Dictionary };

const DICTIONARIES: Record<Locale, Dictionary> = { fr, en };

/** Interface strings for `locale`. Small and synchronous, so usable from both server and client components. */
export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
