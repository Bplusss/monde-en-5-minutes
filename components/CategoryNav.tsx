import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { type Locale, getDictionary } from "@/lib/i18n";
import { countryPath } from "@/lib/i18n/routes";
import { cn } from "@/lib/utils";
import { ScrollableTabs } from "./ScrollableTabs";

export function CategoryNav({ countrySlug, activeKey, locale }: { countrySlug: string; activeKey: string; locale: Locale }) {
  return (
    <nav
      aria-label={getDictionary(locale).country.categoriesLabel}
      className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur"
    >
      <div className="container-app">
        <ScrollableTabs activeKey={activeKey} className="py-2.5">
          {CATEGORIES.map((cat) => {
            const active = cat.key === activeKey;
            return (
              <Link
                key={cat.key}
                href={countryPath(locale, countrySlug, cat.slugs[locale])}
                data-active={active}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? cn(cat.bg, cat.text) : "text-muted hover:bg-surface-muted hover:text-foreground",
                )}
              >
                <span aria-hidden>{cat.emoji}</span>
                {cat.labels[locale]}
              </Link>
            );
          })}
        </ScrollableTabs>
      </div>
    </nav>
  );
}
