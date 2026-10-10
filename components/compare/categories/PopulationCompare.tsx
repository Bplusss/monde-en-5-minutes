import type { CompareCategoryProps } from ".";
import { QuantitativeMetrics } from "../QuantitativeMetrics";

export function PopulationCompare({ a, b, locale }: CompareCategoryProps) {
  return <QuantitativeMetrics category="population" a={a} b={b} locale={locale} />;
}
