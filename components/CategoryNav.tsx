import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { cn } from "@/lib/utils";
import { ScrollableTabs } from "./ScrollableTabs";

export function CategoryNav({ countrySlug, activeSlug }: { countrySlug: string; activeSlug: string }) {
  return (
    <nav
      aria-label="Catégories"
      className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur"
    >
      <div className="container-app">
        <ScrollableTabs activeKey={activeSlug} className="py-2.5">
          {CATEGORIES.map((cat) => {
            const active = cat.slug === activeSlug;
            return (
              <Link
                key={cat.key}
                href={`/${countrySlug}/${cat.slug}`}
                data-active={active}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? cn(cat.bg, cat.text) : "text-muted hover:bg-surface-muted hover:text-foreground",
                )}
              >
                <span aria-hidden>{cat.emoji}</span>
                {cat.label}
              </Link>
            );
          })}
        </ScrollableTabs>
      </div>
    </nav>
  );
}
