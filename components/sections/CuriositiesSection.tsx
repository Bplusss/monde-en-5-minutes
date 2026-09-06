import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { SourceTag } from "@/components/ui/SourceTag";

export function CuriositiesSection({ country }: { country: Country }) {
  const cat = getCategory("curiosites")!;

  return (
    <div>
      <SectionHeading
        eyebrow={cat.label}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title="Quelques faits surprenants — et vérifiables"
        description="Une sélection de curiosités, chacune appuyée sur une source vérifiable."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {country.curiosities.map((c) => (
          <Card key={c.title} className={`border-l-4 ${cat.border}`}>
            <CardContent className="pt-5">
              <span className="mb-2 block text-2xl" aria-hidden>
                🤯
              </span>
              <h3 className="mb-2 text-base font-semibold leading-snug">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{c.description}</p>
              {c.source && (
                <div className="mt-4">
                  <SourceTag source={c.source} sourceUrl={c.sourceUrl} />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
