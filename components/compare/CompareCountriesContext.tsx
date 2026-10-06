"use client";

import { createContext, useContext } from "react";
import type { CountrySummary } from "@/lib/types";

/**
 * Registry summaries for the comparison tool's client components. Provided by
 * `CompareSelector` (which gets them from the server page) so no client module
 * imports `data/countries-registry` — that would bundle every country's dataset.
 */
const CompareCountriesContext = createContext<CountrySummary[]>([]);

export const CompareCountriesProvider = CompareCountriesContext.Provider;

export function useCompareCountries(): CountrySummary[] {
  return useContext(CompareCountriesContext);
}
