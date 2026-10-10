"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, LOCALES, getDictionary } from "@/lib/i18n";
import { STATIC_SEGMENTS, canonicalCountrySlug, comparePath, countriesPath, countryPath, homePath } from "@/lib/i18n/routes";
import { CATEGORIES } from "@/lib/categories";

/** The same page in `target`, or that locale's home page when the country isn't translated yet. */
function counterpartPath(pathname: string, locale: Locale, target: Locale, availability: Record<string, string[]>): string {
  // Static prerendering sees the internal path (`/fr/france`, `/en/pays`), the browser the public one
  // (`/france`, `/en/countries`) — accept both.
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === locale) segments.shift();
  const [first, second] = segments;
  if (!first) return homePath(target);
  if (first === STATIC_SEGMENTS[locale].pays || first === "pays") return countriesPath(target);
  if (first === STATIC_SEGMENTS[locale].comparer || first === "comparer") return comparePath(target);

  const slug = canonicalCountrySlug(first, locale);
  if (!slug || !availability[target]?.includes(slug)) return homePath(target);
  const category = second ? CATEGORIES.find((c) => c.slugs[locale] === second) : undefined;
  return countryPath(target, slug, category?.slugs[target]);
}

export function LanguageSwitcher({ locale, availability }: { locale: Locale; availability: Record<string, string[]> }) {
  const pathname = usePathname();
  const target = LOCALES.find((l) => l !== locale)!;
  const t = getDictionary(locale);

  return (
    <Link
      href={counterpartPath(pathname, locale, target, availability)}
      hrefLang={target}
      lang={target}
      title={t.nav.switchLanguageLabel}
      aria-label={t.nav.switchLanguageLabel}
      className="focus-ring rounded-full border border-border px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
    >
      {target}
    </Link>
  );
}
