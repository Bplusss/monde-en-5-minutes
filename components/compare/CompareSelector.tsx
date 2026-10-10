"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeftRight, Scale } from "lucide-react";
import type { Country, CountrySummary } from "@/lib/types";
import { type CountrySortMode, sortCountriesAlpha, groupCountriesByContinent } from "@/lib/country-sort";
import { SortToggle } from "@/components/SortToggle";
import { CountryComparison } from "./CountryComparison";
import { CompareCountriesProvider } from "./CompareCountriesContext";
import { type Locale, getDictionary } from "@/lib/i18n";
import { COMPARE_PARAM, canonicalCountrySlug } from "@/lib/i18n/routes";

/** Fetches the (possibly Supabase-refreshed) country in `locale` from /api/country/[slug]/[lang] — undefined for no/unavailable slug. */
function useLiveCountry(slug: string, locale: Locale): Country | undefined {
  const [country, setCountry] = useState<Country | undefined>(undefined);

  useEffect(() => {
    if (!slug) {
      setCountry(undefined);
      return;
    }
    let cancelled = false;
    fetch(`/api/country/${slug}/${locale}`)
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
  }, [slug, locale]);

  return country;
}

function CountrySelect({
  value,
  onChange,
  label,
  sortMode,
  countries,
  locale,
}: {
  countries: CountrySummary[];
  value: string;
  onChange: (slug: string) => void;
  label: string;
  sortMode: CountrySortMode;
  locale: Locale;
}) {
  const t = getDictionary(locale);
  const optionLabel = (c: CountrySummary) => `${c.flag} ${c.name}${c.status === "coming-soon" ? t.compare.comingSoonSuffix : ""}`;

  return (
    <label className="flex min-w-0 flex-1 flex-col gap-1.5">
      <span className="text-xs font-medium text-muted">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus-ring w-full truncate rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium"
      >
        <option value="">{t.compare.chooseCountry}</option>
        {sortMode === "alpha"
          ? sortCountriesAlpha(countries, locale).map((c) => (
              <option key={c.id} value={c.slug}>
                {optionLabel(c)}
              </option>
            ))
          : groupCountriesByContinent(countries, locale).map(({ continent, countries: group }) => (
              <optgroup key={continent} label={t.continents[continent] ?? continent}>
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
export function CompareSelector({ countries, locale }: { countries: CountrySummary[]; locale: Locale }) {
  const t = getDictionary(locale);
  const searchParams = useSearchParams();
  const param = searchParams.get(COMPARE_PARAM[locale]);
  const preselected = param ? canonicalCountrySlug(param, locale) : undefined;
  const initialSlugA = preselected && countries.some((c) => c.slug === preselected) ? preselected : "";

  const [slugA, setSlugA] = useState(initialSlugA);
  const [slugB, setSlugB] = useState("");
  const [sortMode, setSortMode] = useState<CountrySortMode>("alpha");

  const countryA = useLiveCountry(slugA, locale);
  const countryB = useLiveCountry(slugB, locale);
  const canCompare = !!countryA && !!countryB && slugA !== slugB;

  const emptyMessage = !slugA && !slugB
    ? t.compare.emptyNone
    : slugA === slugB
      ? t.compare.emptySame
      : !slugA || !slugB
        ? t.compare.emptyOne
        : t.compare.emptyUnavailable;

  return (
    <div>
      <div className="mb-3 flex justify-end">
        <SortToggle value={sortMode} onChange={setSortMode} locale={locale} />
      </div>

      <div className="mb-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-end">
        <CountrySelect value={slugA} onChange={setSlugA} label={t.compare.firstCountry} sortMode={sortMode} countries={countries} locale={locale} />
        <div className="hidden shrink-0 items-center justify-center pb-2.5 sm:flex">
          <ArrowLeftRight className="size-4 text-muted" aria-hidden />
        </div>
        <CountrySelect value={slugB} onChange={setSlugB} label={t.compare.secondCountry} sortMode={sortMode} countries={countries} locale={locale} />
      </div>

      {canCompare && countryA && countryB ? (
        <CompareCountriesProvider value={countries}>
          <CountryComparison a={countryA} b={countryB} locale={locale} />
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
