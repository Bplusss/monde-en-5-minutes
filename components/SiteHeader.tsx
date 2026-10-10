import Link from "next/link";
import { Globe } from "lucide-react";
import { type Locale, getDictionary } from "@/lib/i18n";
import { comparePath, countriesPath, homePath } from "@/lib/i18n/routes";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SiteHeader({ locale, availability }: { locale: Locale; availability: Record<string, string[]> }) {
  const t = getDictionary(locale);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-app flex h-16 items-center justify-between gap-2">
        <Link href={homePath(locale)} className="focus-ring flex min-w-0 items-center gap-2 rounded-lg">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground">
            <Globe className="size-4" aria-hidden />
          </span>
          <span className="truncate font-display text-[17px] font-medium tracking-tight">{t.site.name}</span>
        </Link>
        <nav className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Link
            href={countriesPath(locale)}
            className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground sm:px-4"
          >
            {t.nav.allCountries}
          </Link>
          <Link
            href={comparePath(locale)}
            className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground sm:px-4"
          >
            {t.nav.compare}
          </Link>
          <LanguageSwitcher locale={locale} availability={availability} />
        </nav>
      </div>
    </header>
  );
}
