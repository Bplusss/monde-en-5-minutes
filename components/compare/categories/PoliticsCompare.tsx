import type { Country } from "@/lib/types";
import { Landmark, Gavel } from "lucide-react";
import { QuantitativeMetrics } from "../QuantitativeMetrics";
import { CompareColumns } from "../CompareColumns";

export function PoliticsCompare({ a, b }: { a: Country; b: Country }) {
  return (
    <div className="flex flex-col gap-6">
      <CompareColumns
        a={a}
        b={b}
        render={(c) => (
          <>
            <p className="mb-1 text-sm font-semibold">{c.name}</p>
            <p className="mb-4 text-xs text-muted">
              {c.politics.stateForm} — {c.politics.regime}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <Landmark className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden />
                <div className="min-w-0">
                  <p className="text-xs text-muted">{c.politics.headOfState.title}</p>
                  <p className="text-sm font-medium">{c.politics.headOfState.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Gavel className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden />
                <div className="min-w-0">
                  <p className="text-xs text-muted">{c.politics.headOfGovernment.title}</p>
                  <p className="text-sm font-medium">{c.politics.headOfGovernment.name}</p>
                </div>
              </div>
            </div>
          </>
        )}
      />
      <QuantitativeMetrics category="politique" a={a} b={b} />
    </div>
  );
}
