import type { CategoryKey, Country } from "@/lib/types";
import { getMetricsForCategory } from "@/lib/comparison";
import { ComparisonMetricRow } from "./ComparisonMetricRow";
import { Card, CardContent } from "@/components/ui/Card";

export function QuantitativeMetrics({ category, a, b }: { category: CategoryKey; a: Country; b: Country }) {
  const metrics = getMetricsForCategory(category, a, b);
  if (!metrics.length) return null;

  return (
    <Card>
      <CardContent className="divide-y divide-border pt-5">
        {metrics.map((m) => (
          <ComparisonMetricRow key={m.key} metric={m} a={a} b={b} />
        ))}
      </CardContent>
    </Card>
  );
}
