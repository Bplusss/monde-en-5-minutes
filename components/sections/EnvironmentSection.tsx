import { Leaf, Wind, TriangleAlert } from "lucide-react";
import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { type Locale, getDictionary } from "@/lib/i18n";
import { formatNumber, formatPercent, withUnit } from "@/lib/format";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { StatTile } from "@/components/ui/StatTile";
import { SourceTag } from "@/components/ui/SourceTag";
import { Badge } from "@/components/ui/Badge";

export function EnvironmentSection({ country, locale }: { country: Country; locale: Locale }) {
  const cat = getCategory("environnement")!;
  const dict = getDictionary(locale);
  const t = dict.sections;
  const { environment } = country;

  return (
    <div>
      <SectionHeading
        eyebrow={cat.labels[locale]}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={t.environmentTitle(dict.country.of(country.nameWithArticle))}
        description={environment.summary}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile
          label={t.renewables}
          value={formatPercent(environment.renewableShare.value, 1, locale)}
          icon={<Leaf className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          source={environment.renewableShare.source}
          sourceUrl={environment.renewableShare.sourceUrl}
          year={environment.renewableShare.year}
          size="lg"
          locale={locale}
        />
        <StatTile
          label={t.co2}
          value={withUnit(formatNumber(environment.co2PerCapita.value, 1, locale), "t")}
          icon={<Wind className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          source={environment.co2PerCapita.source}
          sourceUrl={environment.co2PerCapita.sourceUrl}
          year={environment.co2PerCapita.year}
          size="lg"
          locale={locale}
        />
        {environment.indicators.map((ind) => (
          <StatTile
            key={ind.label}
            label={ind.label}
            value={
              typeof ind.value.value === "number"
                ? ind.value.unit
                  ? withUnit(formatNumber(ind.value.value, 1, locale), ind.value.unit)
                  : formatNumber(ind.value.value, 1, locale)
                : String(ind.value.value)
            }
            accentText={cat.text}
            accentBg={cat.bg}
            source={ind.value.source}
            sourceUrl={ind.value.sourceUrl}
            year={ind.value.year}
            size="lg"
            locale={locale}
          />
        ))}
      </div>

      {environment.risks.length > 0 && (
        <Card className="mt-4">
          <CardContent className="pt-5">
            <h3 className="mb-3 flex items-center gap-1.5 text-sm font-semibold">
              <TriangleAlert className="size-4" aria-hidden />
              {t.risks}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {environment.risks.map((r) => (
                <Badge key={r}>{r}</Badge>
              ))}
            </div>
            <div className="mt-4">
              <SourceTag source={environment.risksSource.source} sourceUrl={environment.risksSource.sourceUrl} locale={locale} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
