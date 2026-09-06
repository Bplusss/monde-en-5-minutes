import type { Country } from "@/lib/types";
import { formatPercent } from "@/lib/format";
import { CompareColumns } from "../CompareColumns";
import { Bar } from "@/components/ui/Bar";
import { SourceTag } from "@/components/ui/SourceTag";

export function ReligionCompare({ a, b }: { a: Country; b: Country }) {
  return (
    <CompareColumns
      a={a}
      b={b}
      render={(c) => (
        <>
          <p className="mb-1 text-sm font-semibold">{c.name}</p>
          <p className="mb-4 text-xs text-muted">
            {c.religion.surveyName} · {c.religion.year}
          </p>
          <div className="flex flex-col gap-3">
            {c.religion.points.map((p) => (
              <Bar key={p.label} label={p.label} valueLabel={formatPercent(p.sharePercent)} percent={p.sharePercent} />
            ))}
          </div>
          <div className="mt-4">
            <SourceTag source={c.religion.source} sourceUrl={c.religion.sourceUrl} />
          </div>
        </>
      )}
    />
  );
}
