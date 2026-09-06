import type { ReactNode } from "react";
import type { Country } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/Card";

/** Generic side-by-side layout for qualitative content — one Card per country, same render function for both. */
export function CompareColumns({
  a,
  b,
  render,
}: {
  a: Country;
  b: Country;
  render: (country: Country) => ReactNode;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[a, b].map((c) => (
        <Card key={c.id}>
          <CardContent className="pt-5">{render(c)}</CardContent>
        </Card>
      ))}
    </div>
  );
}
