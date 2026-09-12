import { MousePointerClick } from "lucide-react";
import { WorldMap } from "@/components/map/WorldMap";
import { CountrySearchBar } from "@/components/CountrySearchBar";
import { RandomCountryButton } from "@/components/RandomCountryButton";
import { CATEGORIES } from "@/lib/categories";
import { COUNTRIES, getAvailableCountries } from "@/data/countries-registry";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="container-app grid gap-8 py-8 sm:py-10 lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
              Découvrez un pays
              <br />
              en 5 minutes.
            </h1>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted">
              Géographie, population, économie, histoire, culture : l&apos;essentiel d&apos;un pays, présenté de
              façon claire, visuelle et sourcée. Sans jugement, sans opinion — que des faits.
            </p>
            <div className="mt-6">
              <CountrySearchBar countries={COUNTRIES} />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <RandomCountryButton countries={getAvailableCountries()} />
            </div>
          </div>

          <div>
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border sm:aspect-[16/9]">
              <WorldMap className="size-full" />
            </div>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm text-muted">
              <MousePointerClick className="size-3.5" aria-hidden />
              Cliquez sur un pays pour découvrir sa fiche
            </p>
          </div>
        </div>
      </section>

      <section className="container-app py-8 sm:py-10">
        <div className="mb-6 max-w-lg">
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Dix angles pour comprendre un pays
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            Chaque fiche pays suit la même structure claire, de la géographie à l&apos;essentiel à retenir.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.key}
              className="flex flex-col items-start gap-2.5 rounded-2xl border border-border bg-surface p-4"
            >
              <span className={`flex size-9 items-center justify-center rounded-lg ${cat.bg} ${cat.text}`}>
                <cat.icon className="size-4" aria-hidden />
              </span>
              <span className="text-sm font-medium leading-snug">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
