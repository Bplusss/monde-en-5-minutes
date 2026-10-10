import type { Country } from "@/lib/types";
import type { ComparisonMetric } from "@/lib/comparison";
import { type Locale, getDictionary } from "@/lib/i18n";
import { ComparisonBar } from "./ComparisonBar";

export function ComparisonMetricRow({ metric, a, b, locale }: { metric: ComparisonMetric; a: Country; b: Country; locale: Locale }) {
  const va = metric.rawValue(a);
  const vb = metric.rawValue(b);
  const max = Math.max(va, vb, 1);

  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <p className="mb-2.5 text-center text-xs font-semibold uppercase tracking-wide text-muted">
        {getDictionary(locale).metrics[metric.key]}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <ComparisonBar valueLabel={metric.format(a, locale)} percent={(va / max) * 100} colorClass="bg-brand" align="right" />
        <ComparisonBar valueLabel={metric.format(b, locale)} percent={(vb / max) * 100} colorClass="bg-accent" align="left" />
      </div>
    </div>
  );
}
