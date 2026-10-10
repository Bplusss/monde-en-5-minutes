"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, LOCALES, getDictionary } from "@/lib/i18n";
import { counterpartPage, rememberLanguageChoice } from "@/lib/i18n/counterpart";

export function LanguageSwitcher({ locale, availability }: { locale: Locale; availability: Record<string, string[]> }) {
  const pathname = usePathname();
  const target = LOCALES.find((l) => l !== locale)!;
  const t = getDictionary(locale);

  return (
    <Link
      href={counterpartPage(pathname, locale, target, availability).path}
      onClick={() => rememberLanguageChoice(target)}
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
