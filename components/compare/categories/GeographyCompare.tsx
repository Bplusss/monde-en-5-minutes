import type { Country } from "@/lib/types";
import { QuantitativeMetrics } from "../QuantitativeMetrics";
import { CompareColumns } from "../CompareColumns";
import { Badge } from "@/components/ui/Badge";
import { CountryBadgeLink } from "@/components/ui/CountryBadgeLink";
import { getCountryByName } from "@/data/countries-registry";

export function GeographyCompare({ a, b }: { a: Country; b: Country }) {
  return (
    <div className="flex flex-col gap-6">
      <QuantitativeMetrics category="geographie" a={a} b={b} />
      <CompareColumns
        a={a}
        b={b}
        render={(c) => (
          <>
            <p className="mb-3 text-sm font-semibold">{c.name}</p>
            <p className="mb-4 text-sm leading-relaxed text-muted">{c.geography.climate}</p>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Pays frontaliers</p>
            <div className="flex flex-wrap gap-1.5">
              {c.geography.borderingCountries.length > 0 ? (
                c.geography.borderingCountries.map((name) => {
                  const match = getCountryByName(name);
                  return (
                    <CountryBadgeLink
                      key={name}
                      name={name}
                      slug={match?.slug}
                      available={match?.status === "available"}
                    />
                  );
                })
              ) : (
                <span className="text-sm text-muted">Aucun</span>
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
            <p className="mb-3 text-sm font-semibold">{c.name} — outre-mer</p>
            {c.territories.overseas.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {c.territories.overseas.map((t) => (
                  <Badge key={t.name} title={t.status}>
                    {t.name}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">Aucun territoire d&apos;outre-mer.</p>
            )}
          </>
        )}
      />
    </div>
  );
}
