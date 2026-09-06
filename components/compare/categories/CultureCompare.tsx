import type { Country } from "@/lib/types";
import { CompareColumns } from "../CompareColumns";
import { Badge } from "@/components/ui/Badge";

export function CultureCompare({ a, b }: { a: Country; b: Country }) {
  return (
    <CompareColumns
      a={a}
      b={b}
      render={(c) => (
        <>
          <p className="mb-4 text-sm font-semibold">{c.name}</p>
          <div className="flex flex-col gap-3">
            {c.culture.items.map((item) => (
              <div key={item.title}>
                <Badge className="mb-1">{item.category}</Badge>
                <p className="text-sm font-medium leading-snug">{item.title}</p>
              </div>
            ))}
          </div>
        </>
      )}
    />
  );
}
