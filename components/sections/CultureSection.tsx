import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { type Locale, getDictionary } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SourceTag } from "@/components/ui/SourceTag";

export function CultureSection({ country, locale }: { country: Country; locale: Locale }) {
  const cat = getCategory("culture")!;
  const { culture } = country;

  return (
    <div>
      <SectionHeading
        eyebrow={cat.labels[locale]}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={getDictionary(locale).sections.cultureTitle}
        description={culture.intro}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {culture.items.map((item) => (
          <Card key={item.title}>
            <CardContent className="pt-5">
              <Badge className={`mb-3 border-transparent ${cat.bg} ${cat.text}`}>{item.category}</Badge>
              <h3 className="mb-2 text-base font-semibold leading-snug">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              {item.examples && item.examples.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.examples.map((ex) => (
                    <Badge key={ex} className="bg-surface-muted font-normal text-foreground">
                      {ex}
                    </Badge>
                  ))}
                </div>
              )}
              {item.source && (
                <div className="mt-4">
                  <SourceTag source={item.source} sourceUrl={item.sourceUrl} locale={locale} />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
