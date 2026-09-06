import type { Country } from "@/lib/types";
import { QuantitativeMetrics } from "../QuantitativeMetrics";

export function PopulationCompare({ a, b }: { a: Country; b: Country }) {
  return <QuantitativeMetrics category="population" a={a} b={b} />;
}
