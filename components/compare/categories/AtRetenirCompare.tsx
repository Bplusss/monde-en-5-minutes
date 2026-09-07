import type { Country } from "@/lib/types";
import { CompareColumns } from "../CompareColumns";

export function AtRetenirCompare({ a, b }: { a: Country; b: Country }) {
  return (
    <CompareColumns
      a={a}
      b={b}
      render={(c) => (
        <>
          <p className="mb-4 text-sm font-semibold">{c.name}</p>
          <div className="flex flex-col gap-4">
            {c.keyFacts.map((f) => (
              <div key={f.title}>
                <p className="text-sm font-medium leading-snug">💡 {f.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    />
  );
}
