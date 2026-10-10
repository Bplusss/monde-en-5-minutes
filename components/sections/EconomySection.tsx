import { Coins, TrendingUp, Users } from "lucide-react";
import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { type Locale, getDictionary } from "@/lib/i18n";
import { formatCurrencyCompact, formatPercent } from "@/lib/format";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { StatTile } from "@/components/ui/StatTile";
import { Bar } from "@/components/ui/Bar";
import { SourceTag } from "@/components/ui/SourceTag";

export function EconomySection({ country, locale }: { country: Country; locale: Locale }) {
  const cat = getCategory("economie")!;
  const t = getDictionary(locale).sections;
  const { economy } = country;

  return (
    <div>
      <SectionHeading
        eyebrow={cat.labels[locale]}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={t.economyTitle}
        description={economy.summary}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile
          label={t.gdp}
          value={formatCurrencyCompact(economy.gdp.value, economy.gdp.unit ?? "€", 1, locale)}
          icon={<Coins className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          source={economy.gdp.source}
          sourceUrl={economy.gdp.sourceUrl}
          year={economy.gdp.year}
          size="lg"
          locale={locale}
        />
        <StatTile
          label={t.gdpPerCapita}
          value={formatCurrencyCompact(economy.gdpPerCapita.value, economy.gdpPerCapita.unit ?? "€", 1, locale)}
          icon={<TrendingUp className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          source={economy.gdpPerCapita.source}
          sourceUrl={economy.gdpPerCapita.sourceUrl}
          year={economy.gdpPerCapita.year}
          size="lg"
          locale={locale}
        />
        <StatTile
          label={t.unemployment}
          value={formatPercent(economy.unemploymentRate.value, 1, locale)}
          icon={<Users className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          source={economy.unemploymentRate.source}
          sourceUrl={economy.unemploymentRate.sourceUrl}
          year={economy.unemploymentRate.year}
          size="lg"
          locale={locale}
        />
        <StatTile
          label={t.currency}
          value={`${economy.currency.name} (${economy.currency.symbol})`}
          icon={<span className="text-sm font-bold">{economy.currency.symbol}</span>}
          accentText={cat.text}
          accentBg={cat.bg}
          size="lg"
          locale={locale}
        />
      </div>

      <div className={`mt-4 grid gap-4 ${economy.indicators.length > 0 ? "lg:grid-cols-2" : ""}`}>
        <Card>
          <CardContent className="pt-5">
            <h3 className="mb-4 text-sm font-semibold">{t.sectors}</h3>
            <div className="flex flex-col gap-3">
              {economy.sectors.map((s) => (
                <Bar
                  key={s.name}
                  label={s.name}
                  valueLabel={formatPercent(s.sharePercent, 1, locale)}
                  percent={s.sharePercent}
                  colorClass={cat.bar}
                />
              ))}
            </div>
            <div className="mt-4">
              <SourceTag
                source={economy.sectorsSource.source}
                sourceUrl={economy.sectorsSource.sourceUrl}
                year={economy.sectorsSource.year}
                locale={locale}
              />
            </div>
          </CardContent>
        </Card>

        {economy.indicators.length > 0 && (
          <Card>
            <CardContent className="pt-5">
              <h3 className="mb-4 text-sm font-semibold">{t.indicators}</h3>
              <div className="flex flex-col divide-y divide-border">
                {economy.indicators.map((ind) => (
                  <div key={ind.label} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                    <span className="text-sm text-muted">{ind.label}</span>
                    <div className="text-right">
                      <p className="kpi-value text-sm font-semibold">{ind.value.value}</p>
                      <SourceTag
                        source={ind.value.source}
                        sourceUrl={ind.value.sourceUrl}
                        year={ind.value.year}
                        locale={locale}
                        className="justify-end"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
