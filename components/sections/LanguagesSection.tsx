import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { type Locale, getDictionary } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function LanguagesSection({ country, locale }: { country: Country; locale: Locale }) {
  const cat = getCategory("langues")!;
  const t = getDictionary(locale).sections;
  const { languages } = country;

  return (
    <div>
      <SectionHeading
        eyebrow={cat.labels[locale]}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={t.languagesTitle}
        description={languages.summary}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {languages.entries.map((entry) => (
          <Card key={entry.name}>
            <CardContent className="pt-5">
              <Badge className={`mb-3 ${cat.bg} ${cat.text} border-transparent`}>
                {t.languageKind[entry.kind]}
              </Badge>
              <h3 className="mb-2 text-base font-semibold leading-snug">{entry.name}</h3>
              {entry.note && <p className="text-sm leading-relaxed text-muted">{entry.note}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
