import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { SourceTag } from "@/components/ui/SourceTag";

export function AtRetenirSection({ country }: { country: Country }) {
  const cat = getCategory("a-retenir")!;

  return (
    <div>
      <SectionHeading
        eyebrow={cat.label}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={`Ce qu'il faut retenir sur ${country.name}`}
        description="5 à 10 faits qui permettent de comprendre ce qui rend le pays particulier."
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
                  <SourceTag source={f.source} sourceUrl={f.sourceUrl} />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
