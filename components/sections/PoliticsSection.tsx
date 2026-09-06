import { Landmark, Scale, Gavel } from "lucide-react";
import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { SourceTag } from "@/components/ui/SourceTag";

export function PoliticsSection({ country }: { country: Country }) {
  const cat = getCategory("politique")!;
  const { politics } = country;

  return (
    <div>
      <SectionHeading
        eyebrow={cat.label}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={`${politics.stateForm} — ${politics.regime}`}
        description={politics.summary}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardContent className="flex items-start gap-3 pt-5">
            <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${cat.bg} ${cat.text}`}>
              <Landmark className="size-4" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-muted">{politics.headOfState.title}</p>
              <p className="truncate text-base font-semibold">{politics.headOfState.name}</p>
              <p className="text-xs text-muted">Depuis le {politics.headOfState.since}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-start gap-3 pt-5">
            <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${cat.bg} ${cat.text}`}>
              <Gavel className="size-4" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-muted">{politics.headOfGovernment.title}</p>
              <p className="truncate text-base font-semibold">{politics.headOfGovernment.name}</p>
              <p className="text-xs text-muted">Depuis le {politics.headOfGovernment.since}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardContent className="pt-5">
          <div className="mb-4 flex items-center gap-2">
            <Scale className={`size-4 ${cat.text}`} aria-hidden />
            <h3 className="text-sm font-semibold">{politics.legislature.name}</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {politics.legislature.chambers.map((ch) => (
              <div key={ch.name} className="rounded-xl bg-surface-muted p-4">
                <p className="kpi-value font-display text-2xl font-medium">{ch.seats}</p>
                <p className="text-xs text-muted">{ch.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
            <p className="text-xs text-muted">Constitution adoptée le {politics.constitution.adopted}</p>
            <SourceTag source={politics.constitution.source} sourceUrl={politics.constitution.sourceUrl} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
