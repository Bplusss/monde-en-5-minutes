import type { Country } from "@/lib/types";
import { QuantitativeMetrics } from "../QuantitativeMetrics";
import { CompareColumns } from "../CompareColumns";
import { Badge } from "@/components/ui/Badge";

export function TerritoryCompare({ a, b }: { a: Country; b: Country }) {
  return (
    <div className="flex flex-col gap-6">
      <QuantitativeMetrics category="territoire" a={a} b={b} />
      <CompareColumns
        a={a}
        b={b}
        render={(c) => (
          <>
            <p className="mb-3 text-sm font-semibold">{c.name} — outre-mer</p>
            {c.territories.overseas.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {c.territories.overseas.map((t) => (
                  <Badge key={t.name} title={t.status}>
                    {t.name}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">Aucun territoire d&apos;outre-mer.</p>
            )}
          </>
        )}
      />
    </div>
  );
}
