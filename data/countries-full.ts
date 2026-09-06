import type { Country } from "@/lib/types";
import { france } from "./france";
import { italy } from "./italy";
import { germany } from "./germany";
import { spain } from "./spain";
import { portugal } from "./portugal";

/** Full `Country` records — the only ones that can be rendered as a country page or in a comparison. */
export const FULL_COUNTRIES: Record<string, Country> = {
  [france.slug]: france,
  [italy.slug]: italy,
  [germany.slug]: germany,
  [spain.slug]: spain,
  [portugal.slug]: portugal,
};

export function getFullCountry(slug: string): Country | undefined {
  return FULL_COUNTRIES[slug];
}
