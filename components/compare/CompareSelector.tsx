"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeftRight, Scale } from "lucide-react";
import type { Country, CountrySummary } from "@/lib/types";
import { type CountrySortMode, sortCountriesAlpha, groupCountriesByContinent } from "@/lib/country-sort";
import { SortToggle } from "@/components/SortToggle";
import { CountryComparison } from "./CountryComparison";
import { CompareCountriesProvider } from "./CompareCountriesContext";

/** Fetches the (possibly Supabase-refreshed) country from /api/country/[slug] — undefined for no/unavailable slug. */
function useLiveCountry(slug: string): Country | undefined {
  const [country, setCountry] = useState<Country | undefined>(undefined);

  useEffect(() => {
    if (!slug) {
      setCountry(undefined);
      return;
    }
    let cancelled = false;
    fetch(`/api/country/${slug}`)
      .then((res) => (res.ok ? res.json() : undefined))
      .then((data) => {
        if (!cancelled) setCountry(data);
      })
      .catch(() => {
        if (!cancelled) setCountry(undefined);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return country;
}

function CountrySelect({
  value,
  onChange,
  label,
  sortMode,
  countries,
}: {
  countries: CountrySummary[];
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
          ? sortCountriesAlpha(countries).map((c) => (
              <option key={c.id} value={c.slug}>
                {optionLabel(c)}
              </option>
            ))
          : groupCountriesByContinent(countries).map(({ continent, countries: group }) => (
              <optgroup key={continent} label={continent}>
                {group.map((c) => (
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

/** `countries` comes from the registry via the server page, so the registry never ships in client JS. */
export function CompareSelector({ countries }: { countries: CountrySummary[] }) {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("pays");
  const initialSlugA = preselected && countries.some((c) => c.slug === preselected) ? preselected : "";

  const [slugA, setSlugA] = useState(initialSlugA);
  const [slugB, setSlugB] = useState("");
  const [sortMode, setSortMode] = useState<CountrySortMode>("alpha");

  const countryA = useLiveCountry(slugA);
  const countryB = useLiveCountry(slugB);
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
        <CountrySelect value={slugA} onChange={setSlugA} label="Premier pays" sortMode={sortMode} countries={countries} />
        <div className="hidden shrink-0 items-center justify-center pb-2.5 sm:flex">
          <ArrowLeftRight className="size-4 text-muted" aria-hidden />
        </div>
        <CountrySelect value={slugB} onChange={setSlugB} label="Second pays" sortMode={sortMode} countries={countries} />
      </div>

      {canCompare && countryA && countryB ? (
        <CompareCountriesProvider value={countries}>
          <CountryComparison a={countryA} b={countryB} />
        </CompareCountriesProvider>
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
