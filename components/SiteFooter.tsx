import Link from "next/link";
import { type Locale, getDictionary } from "@/lib/i18n";
import { comparePath, countriesPath } from "@/lib/i18n/routes";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <footer className="border-t border-border">
      <div className="container-app flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footer.tagline}</p>
        <nav className="flex gap-4">
          <Link href={countriesPath(locale)} className="focus-ring rounded hover:text-foreground">
            {t.nav.allCountries}
          </Link>
          <Link href={comparePath(locale)} className="focus-ring rounded hover:text-foreground">
            {t.nav.compare}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
