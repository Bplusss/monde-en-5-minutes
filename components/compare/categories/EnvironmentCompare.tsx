import type { Country } from "@/lib/types";
import { QuantitativeMetrics } from "../QuantitativeMetrics";
import { CompareColumns } from "../CompareColumns";
import { Badge } from "@/components/ui/Badge";

export function EnvironmentCompare({ a, b }: { a: Country; b: Country }) {
  return (
    <div className="flex flex-col gap-6">
      <QuantitativeMetrics category="environnement" a={a} b={b} />
      <CompareColumns
        a={a}
        b={b}
        render={(c) => (
          <>
            <p className="mb-3 text-sm font-semibold">{c.name} — risques naturels</p>
            <div className="flex flex-wrap gap-1.5">
              {c.environment.risks.map((r) => (
                <Badge key={r}>{r}</Badge>
              ))}
            </div>
          </>
        )}
      />
    </div>
  );
}
