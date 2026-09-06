import type { Country } from "@/lib/types";
import type { ComparisonMetric } from "@/lib/comparison";
import { ComparisonBar } from "./ComparisonBar";

export function ComparisonMetricRow({ metric, a, b }: { metric: ComparisonMetric; a: Country; b: Country }) {
  const va = metric.rawValue(a);
  const vb = metric.rawValue(b);
  const max = Math.max(va, vb, 1);

  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <p className="mb-2.5 text-center text-xs font-semibold uppercase tracking-wide text-muted">{metric.label}</p>
      <div className="grid grid-cols-2 gap-4">
        <ComparisonBar valueLabel={metric.format(a)} percent={(va / max) * 100} colorClass="bg-brand" align="right" />
        <ComparisonBar valueLabel={metric.format(b)} percent={(vb / max) * 100} colorClass="bg-accent" align="left" />
      </div>
    </div>
  );
}
