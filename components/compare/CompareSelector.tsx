"use client";

import { useState } from "react";
import { ArrowLeftRight, Scale } from "lucide-react";
import { COUNTRIES } from "@/data/countries-registry";
import { getFullCountry } from "@/data/countries-full";
import type { CountrySummary } from "@/lib/types";
import { type CountrySortMode, sortCountriesAlpha, groupCountriesByContinent } from "@/lib/country-sort";
import { SortToggle } from "@/components/SortToggle";
import { CountryComparison } from "./CountryComparison";

function CountrySelect({
  value,
  onChange,
  label,
  sortMode,
}: {
  value: string;
  onChange: (slug: string) => void;
  label: string;
  sortMode: CountrySortMode;
}) {
  const optionLabel = (c: CountrySummary) => `${c.flag} ${c.name}${c.status === "coming-soon" ? " — bientôt disponible" : ""}`;

  return (
    <label className="flex min-w-0 flex-1 flex-col gap-1.5">
      <span className="text-xs font-medium text-muted">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus-ring w-full truncate rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium"
      >
        <option value="">Choisir un pays…</option>
        {sortMode === "alpha"
          ? sortCountriesAlpha(COUNTRIES).map((c) => (
              <option key={c.id} value={c.slug}>
                {optionLabel(c)}
              </option>
            ))
          : groupCountriesByContinent(COUNTRIES).map(({ continent, countries }) => (
              <optgroup key={continent} label={continent}>
                {countries.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {optionLabel(c)}
                  </option>
                ))}
              </optgroup>
            ))}
      </select>
    </label>
  );
}

export function CompareSelector() {
  const [slugA, setSlugA] = useState("");
  const [slugB, setSlugB] = useState("");
  const [sortMode, setSortMode] = useState<CountrySortMode>("alpha");

  const countryA = slugA ? getFullCountry(slugA) : undefined;
  const countryB = slugB ? getFullCountry(slugB) : undefined;
  const canCompare = !!countryA && !!countryB && slugA !== slugB;

  const emptyMessage = !slugA && !slugB
    ? "Choisissez deux pays pour lancer la comparaison."
    : slugA === slugB
      ? "Choisissez deux pays différents pour lancer la comparaison."
      : !slugA || !slugB
        ? "Choisissez un second pays pour lancer la comparaison."
        : "Il faut deux pays disponibles pour effectuer une comparaison complète. Les autres pays arrivent progressivement, en suivant le même modèle.";

  return (
    <div>
      <div className="mb-3 flex justify-end">
        <SortToggle value={sortMode} onChange={setSortMode} />
      </div>

      <div className="mb-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-end">
        <CountrySelect value={slugA} onChange={setSlugA} label="Premier pays" sortMode={sortMode} />
        <div className="hidden shrink-0 items-center justify-center pb-2.5 sm:flex">
          <ArrowLeftRight className="size-4 text-muted" aria-hidden />
        </div>
        <CountrySelect value={slugB} onChange={setSlugB} label="Second pays" sortMode={sortMode} />
      </div>

      {canCompare && countryA && countryB ? (
        <CountryComparison a={countryA} b={countryB} />
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-surface-muted px-6 py-16 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-surface text-muted">
            <Scale className="size-5" aria-hidden />
          </span>
          <p className="max-w-sm text-sm text-muted">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
}
