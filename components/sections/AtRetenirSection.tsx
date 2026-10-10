import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { type Locale, getDictionary } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { SourceTag } from "@/components/ui/SourceTag";

export function AtRetenirSection({ country, locale }: { country: Country; locale: Locale }) {
  const cat = getCategory("a-retenir")!;
  const t = getDictionary(locale);

  return (
    <div>
      <SectionHeading
        eyebrow={cat.labels[locale]}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={t.sections.keyFactsTitle(country.name)}
        description={t.sections.keyFactsDescription}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {country.keyFacts.map((f) => (
          <Card key={f.title} className={`border-l-4 ${cat.border}`}>
            <CardContent className="pt-5">
              <span className="mb-2 block text-2xl" aria-hidden>
                {cat.emoji}
              </span>
              <h3 className="mb-2 text-base font-semibold leading-snug">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{f.description}</p>
              {f.source && (
                <div className="mt-4">
                  <SourceTag source={f.source} sourceUrl={f.sourceUrl} locale={locale} />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
