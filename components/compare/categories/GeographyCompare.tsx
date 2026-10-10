import type { CompareCategoryProps } from ".";
import { getDictionary } from "@/lib/i18n";
import { QuantitativeMetrics } from "../QuantitativeMetrics";
import { CompareColumns } from "../CompareColumns";
import { Badge } from "@/components/ui/Badge";
import { CountryBadgeLink } from "@/components/ui/CountryBadgeLink";
import { useCompareCountries } from "../CompareCountriesContext";

export function GeographyCompare({ a, b, locale }: CompareCategoryProps) {
  const countries = useCompareCountries();
  const t = getDictionary(locale);
  return (
    <div className="flex flex-col gap-6">
      <QuantitativeMetrics category="geographie" a={a} b={b} locale={locale} />
      <CompareColumns
        a={a}
        b={b}
        render={(c) => (
          <>
            <p className="mb-3 text-sm font-semibold">{c.name}</p>
            <p className="mb-4 text-sm leading-relaxed text-muted">{c.geography.climate}</p>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">{t.compare.borderingCountries}</p>
            <div className="flex flex-wrap gap-1.5">
              {c.geography.borderingCountries.length > 0 ? (
                c.geography.borderingCountries.map((name) => {
                  const match = countries.find((c) => c.name === name);
                  return (
                    <CountryBadgeLink
                      key={name}
                      name={name}
                      slug={match?.slug}
                      available={match?.status === "available"}
                      locale={locale}
                    />
                  );
                })
              ) : (
                <span className="text-sm text-muted">{t.common.none}</span>
              )}
            </div>
          </>
        )}
      />
      <CompareColumns
        a={a}
        b={b}
        render={(c) => (
          <>
            <p className="mb-3 text-sm font-semibold">{t.compare.overseasOf(c.name)}</p>
            {c.territories.overseas.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {c.territories.overseas.map((o) => (
                  <Badge key={o.name} title={o.status}>
                    {o.name}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">{t.compare.noOverseas}</p>
            )}
          </>
        )}
      />
    </div>
  );
}
