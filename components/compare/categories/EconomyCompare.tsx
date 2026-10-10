import type { CompareCategoryProps } from ".";
import { getDictionary } from "@/lib/i18n";
import { formatPercent } from "@/lib/format";
import { QuantitativeMetrics } from "../QuantitativeMetrics";
import { CompareColumns } from "../CompareColumns";
import { Bar } from "@/components/ui/Bar";

export function EconomyCompare({ a, b, locale }: CompareCategoryProps) {
  const t = getDictionary(locale);
  return (
    <div className="flex flex-col gap-6">
      <QuantitativeMetrics category="economie" a={a} b={b} locale={locale} />
      <CompareColumns
        a={a}
        b={b}
        render={(c) => (
          <>
            <p className="mb-4 text-sm font-semibold">{t.compare.sectorsOf(c.name)}</p>
            <div className="flex flex-col gap-3">
              {c.economy.sectors.map((s) => (
                <Bar key={s.name} label={s.name} valueLabel={formatPercent(s.sharePercent, 1, locale)} percent={s.sharePercent} />
              ))}
            </div>
          </>
        )}
      />
    </div>
  );
}
