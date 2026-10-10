import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { formatPercent } from "@/lib/format";
import { type Locale, getDictionary } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Bar } from "@/components/ui/Bar";
import { SourceTag } from "@/components/ui/SourceTag";

export function ReligionSection({ country, locale }: { country: Country; locale: Locale }) {
  const cat = getCategory("religion")!;
  const t = getDictionary(locale).sections;
  const { religion } = country;

  return (
    <div>
      <SectionHeading
        eyebrow={cat.labels[locale]}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={t.religionTitle}
        description={religion.summary}
      />

      <Card>
        <CardContent className="pt-5">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-muted">
              {t.survey(religion.surveyName, religion.ageScope)}
            </p>
            <SourceTag source={religion.source} sourceUrl={religion.sourceUrl} year={religion.year} locale={locale} />
          </div>
          <div className="flex flex-col gap-4">
            {religion.points.map((p) => (
              <Bar
                key={p.label}
                label={p.label}
                valueLabel={formatPercent(p.sharePercent, 0, locale)}
                percent={p.sharePercent}
                colorClass={cat.bar}
              />
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-surface-muted p-4">
            <p className="text-xs leading-relaxed text-muted">{religion.methodologyNote}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
