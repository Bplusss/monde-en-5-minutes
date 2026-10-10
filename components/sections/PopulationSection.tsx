import { Users, TrendingUp, Gauge } from "lucide-react";
import type { Country } from "@/lib/types";
import { getCategory } from "@/lib/categories";
import { type Locale, getDictionary } from "@/lib/i18n";
import { formatCompact, formatNumber, formatPercent, withUnit } from "@/lib/format";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { StatTile } from "@/components/ui/StatTile";
import { Bar } from "@/components/ui/Bar";
import { SourceTag } from "@/components/ui/SourceTag";
import { CountryMap } from "@/components/map/CountryMap";

export function PopulationSection({ country, locale }: { country: Country; locale: Locale }) {
  const cat = getCategory("population")!;
  const dict = getDictionary(locale);
  const t = dict.sections;
  const { population, cities } = country;
  const topCities = [...cities].sort((a, b) => (b.population?.value ?? 0) - (a.population?.value ?? 0)).slice(0, 6);
  const maxPop = topCities[0]?.population?.value ?? 1;

  return (
    <div>
      <SectionHeading
        eyebrow={cat.labels[locale]}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={t.populationTitle}
        description={population.summary}
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile
          label={t.population}
          value={withUnit(formatCompact(population.total.value, 1, locale), dict.units.inhabitants)}
          icon={<Users className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          source={population.total.source}
          sourceUrl={population.total.sourceUrl}
          year={population.total.year}
          size="lg"
          locale={locale}
        />
        <StatTile
          label={t.density}
          value={withUnit(formatNumber(population.density.value, 0, locale), population.density.unit ?? dict.units.perKm2)}
          icon={<Gauge className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          source={population.density.source}
          sourceUrl={population.density.sourceUrl}
          year={population.density.year}
          size="lg"
          locale={locale}
        />
        {population.growthRate && (
          <StatTile
            label={t.growth}
            value={`${population.growthRate.value > 0 ? "+" : ""}${formatPercent(population.growthRate.value, 2, locale)}`}
            icon={<TrendingUp className="size-4" aria-hidden />}
            accentText={cat.text}
            accentBg={cat.bg}
            source={population.growthRate.source}
            sourceUrl={population.growthRate.sourceUrl}
            year={population.growthRate.year}
            size="lg"
            locale={locale}
          />
        )}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card className="overflow-hidden">
          <div className="aspect-[4/3] w-full sm:aspect-video">
            <CountryMap maps={country.maps} layer="cities" cities={cities} locale={locale} className="size-full" />
          </div>
          <CardContent className="pt-4">
            <p className="text-sm text-muted">{t.citiesCaption}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="mb-4 text-sm font-semibold">{t.bigCities}</h3>
            <div className="flex flex-col gap-3">
              {topCities.map((c) => (
                <Bar
                  key={c.name}
                  label={c.isCapital ? t.capitalSuffix(c.name) : c.name}
                  valueLabel={withUnit(formatCompact(c.population?.value ?? 0, 1, locale), dict.units.inhabitantsShort)}
                  percent={((c.population?.value ?? 0) / maxPop) * 100}
                  colorClass={cat.bar}
                />
              ))}
            </div>
            {topCities[0]?.population && (
              <div className="mt-4">
                <SourceTag
                  source={topCities[0].population.source}
                  sourceUrl={topCities[0].population.sourceUrl}
                  year={topCities[0].population.year}
                  locale={locale}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
