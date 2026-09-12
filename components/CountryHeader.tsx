import Link from "next/link";
import { Scale } from "lucide-react";
import type { Country } from "@/lib/types";
import { formatCompact, withUnit } from "@/lib/format";
import { CountryLocatorMap } from "@/components/map/CountryLocatorMap";
import { Button } from "@/components/ui/Button";

export function CountryHeader({ country }: { country: Country }) {
  const kpis = [
    { value: withUnit(formatCompact(country.population.total.value), "habitants"), label: "Population" },
    {
      value: withUnit(formatCompact(country.geography.areaKm2.value, country.geography.areaKm2.value < 1 ? 2 : 0), "km²"),
      label: "Superficie",
    },
    { value: withUnit(String(country.regions.length), "régions"), label: "Territoire" },
  ];

  return (
    <section className="border-b border-border bg-surface">
      <div className="container-app grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="min-w-0">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl leading-none">{country.flag}</span>
            <div>
              <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{country.name}</h1>
              <p className="text-sm text-muted">Capitale : {country.capital}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {kpis.map((k) => (
              <div key={k.label} className="min-w-0 rounded-xl border border-border bg-background px-3 py-2.5 sm:px-4 sm:py-3">
                <p className="kpi-value truncate font-display text-base font-medium sm:text-lg">{k.value}</p>
                <p className="truncate text-[11px] text-muted sm:text-xs">{k.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href={`/comparer?pays=${country.slug}`}>
              <Button variant="secondary" size="sm">
                <Scale className="size-3.5" aria-hidden />
                Comparer
              </Button>
            </Link>
            <p className="text-xs text-muted">Données publiques, sourcées et datées.</p>
          </div>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface-muted sm:aspect-[16/10]">
          <CountryLocatorMap iso3={country.id} center={country.maps.center} className="size-full" />
        </div>
      </div>
    </section>
  );
}
