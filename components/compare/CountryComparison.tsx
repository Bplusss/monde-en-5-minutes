"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import type { Country } from "@/lib/types";
import { sameReferenceYear } from "@/lib/comparison";
import { CATEGORIES } from "@/lib/categories";
import { COMPARE_CATEGORY_COMPONENTS } from "./categories";
import { ScrollableTabs } from "@/components/ScrollableTabs";
import { cn } from "@/lib/utils";

/** Generic two-country comparison — works for any pair of full `Country` records, never a hardcoded pair. */
export function CountryComparison({ a, b }: { a: Country; b: Country }) {
  const [activeSlug, setActiveSlug] = useState(CATEGORIES[0].slug);
  const consistent = sameReferenceYear(a, b);
  const activeCategory = CATEGORIES.find((c) => c.slug === activeSlug) ?? CATEGORIES[0];
  const ActiveContent = COMPARE_CATEGORY_COMPONENTS[activeCategory.key];

  return (
    <div>
      <div className="mb-6 grid grid-cols-2 gap-4">
        {[a, b].map((c) => (
          <div key={c.id} className="flex flex-col items-center gap-1.5 text-center">
            <span className="text-4xl leading-none">{c.flag}</span>
            <span className="font-display text-lg font-medium">{c.name}</span>
            <span className="text-xs text-muted">{c.capital}</span>
          </div>
        ))}
      </div>

      {!consistent && (
        <div className="mb-6 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3.5 text-xs text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300">
          <AlertTriangle className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          <p>
            Certaines données proviennent d&apos;années de référence différentes pour {a.name} et {b.name}. Vérifiez
            l&apos;année indiquée sur chaque fiche pays avant de tirer des conclusions.
          </p>
        </div>
      )}

      <div className="mb-5 border-b border-border">
        <ScrollableTabs activeKey={activeSlug} className="pb-px">
          {CATEGORIES.map((cat) => {
            const active = cat.slug === activeSlug;
            return (
              <button
                key={cat.key}
                type="button"
                data-active={active}
                onClick={() => setActiveSlug(cat.slug)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring flex shrink-0 items-center gap-1.5 whitespace-nowrap border-b-2 px-3.5 py-2.5 text-sm font-medium transition-colors",
                  active ? cn(cat.text, "border-current") : "border-transparent text-muted hover:text-foreground",
                )}
              >
                <span aria-hidden>{cat.emoji}</span>
                {cat.label}
              </button>
            );
          })}
        </ScrollableTabs>
      </div>

      <ActiveContent a={a} b={b} />
    </div>
  );
}
