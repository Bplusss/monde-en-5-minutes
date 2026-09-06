import type { Country } from "@/lib/types";
import { formatPercent } from "@/lib/format";
import { QuantitativeMetrics } from "../QuantitativeMetrics";
import { CompareColumns } from "../CompareColumns";
import { Bar } from "@/components/ui/Bar";

export function EconomyCompare({ a, b }: { a: Country; b: Country }) {
  return (
    <div className="flex flex-col gap-6">
      <QuantitativeMetrics category="economie" a={a} b={b} />
      <CompareColumns
        a={a}
        b={b}
        render={(c) => (
          <>
            <p className="mb-4 text-sm font-semibold">{c.name} — répartition de la valeur ajoutée</p>
            <div className="flex flex-col gap-3">
              {c.economy.sectors.map((s) => (
                <Bar key={s.name} label={s.name} valueLabel={formatPercent(s.sharePercent, 1)} percent={s.sharePercent} />
              ))}
            </div>
          </>
        )}
      />
    </div>
  );
}
