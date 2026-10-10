"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CountrySummary } from "@/lib/types";
import { type Locale, getDictionary } from "@/lib/i18n";
import { countryPath } from "@/lib/i18n/routes";
import { type CountrySortMode, sortCountriesAlpha, groupCountriesByContinent } from "@/lib/country-sort";
import { SortToggle } from "@/components/SortToggle";

function CountryCard({ country, locale }: { country: CountrySummary; locale: Locale }) {
  const t = getDictionary(locale);
  if (country.status === "available") {
    return (
      <Link
        href={countryPath(locale, country.slug)}
        className="focus-ring group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-brand"
      >
        <span className="flex items-center gap-3">
          <span className="text-2xl leading-none">{country.flag}</span>
          <span className="text-base font-semibold">{country.name}</span>
        </span>
        <span className="flex items-center gap-1 text-sm font-medium text-brand">
          {t.common.discover}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-dashed border-border bg-surface-muted p-5">
      <span className="text-2xl leading-none opacity-60">{country.flag}</span>
      <span className="flex flex-col">
        <span className="text-base font-semibold text-muted">{country.name}</span>
        <span className="text-xs text-muted">{t.common.comingSoon}</span>
      </span>
    </div>
  );
}

export function CountryDirectory({ countries, locale }: { countries: CountrySummary[]; locale: Locale }) {
  const [sortMode, setSortMode] = useState<CountrySortMode>("alpha");
  const t = getDictionary(locale);

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <SortToggle value={sortMode} onChange={setSortMode} locale={locale} />
      </div>

      {sortMode === "alpha" ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortCountriesAlpha(countries, locale).map((c) => (
            <CountryCard key={c.id} country={c} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {groupCountriesByContinent(countries, locale).map(({ continent, countries: group }) => (
            <div key={continent}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
                {t.continents[continent] ?? continent}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((c) => (
                  <CountryCard key={c.id} country={c} locale={locale} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
