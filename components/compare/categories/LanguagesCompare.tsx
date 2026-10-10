import type { CompareCategoryProps } from ".";
import { getDictionary } from "@/lib/i18n";
import { CompareColumns } from "../CompareColumns";
import { Badge } from "@/components/ui/Badge";

export function LanguagesCompare({ a, b, locale }: CompareCategoryProps) {
  const kindLabel = getDictionary(locale).compare.languageKind;
  return (
    <CompareColumns
      a={a}
      b={b}
      render={(c) => (
        <>
          <p className="mb-4 text-sm font-semibold">{c.name}</p>
          <div className="flex flex-col gap-4">
            {c.languages.entries.map((entry) => (
              <div key={entry.name}>
                <Badge className="mb-1.5">{kindLabel[entry.kind] ?? entry.kind}</Badge>
                <p className="text-sm font-medium leading-snug">{entry.name}</p>
                {entry.note && <p className="mt-1 text-xs leading-relaxed text-muted">{entry.note}</p>}
              </div>
            ))}
          </div>
        </>
      )}
    />
  );
}
