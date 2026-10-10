import type { CompareCategoryProps } from ".";
import { getDictionary } from "@/lib/i18n";
import { QuantitativeMetrics } from "../QuantitativeMetrics";
import { CompareColumns } from "../CompareColumns";
import { Badge } from "@/components/ui/Badge";

export function EnvironmentCompare({ a, b, locale }: CompareCategoryProps) {
  const t = getDictionary(locale);
  return (
    <div className="flex flex-col gap-6">
      <QuantitativeMetrics category="environnement" a={a} b={b} locale={locale} />
      <CompareColumns
        a={a}
        b={b}
        render={(c) => (
          <>
            <p className="mb-3 text-sm font-semibold">{t.compare.risksOf(c.name)}</p>
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
