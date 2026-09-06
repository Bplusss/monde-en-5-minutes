import type { Country } from "@/lib/types";
import { CompareColumns } from "../CompareColumns";

export function CuriositiesCompare({ a, b }: { a: Country; b: Country }) {
  return (
    <CompareColumns
      a={a}
      b={b}
      render={(c) => (
        <>
          <p className="mb-4 text-sm font-semibold">{c.name}</p>
          <div className="flex flex-col gap-4">
            {c.curiosities.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-medium leading-snug">🤯 {item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    />
  );
}
