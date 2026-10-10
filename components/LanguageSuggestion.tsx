"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, X } from "lucide-react";
import { type Locale, getDictionary, hasLocale } from "@/lib/i18n";
import { LANGUAGE_CHOICE_KEY, counterpartPage, rememberLanguageChoice } from "@/lib/i18n/counterpart";

/** The reader's preferred site language from their browser settings, unless they already picked one. "" = nothing to suggest. */
function readPreferredLocale(): string {
  try {
    if (localStorage.getItem(LANGUAGE_CHOICE_KEY)) return "";
  } catch {
    // Storage unavailable: fall through and rely on the browser language alone.
  }
  return navigator.languages.map((l) => l.slice(0, 2).toLowerCase()).find(hasLocale) ?? "";
}

const noSubscription = () => () => {};

/**
 * Offers the current page in the reader's browser language, when it exists in that
 * language. Never redirects: crawlers and readers always get the URL they asked for
 * (automatic language redirects hide pages from search engines). Hidden for good
 * once the reader picks a language, here or with the header switcher.
 */
export function LanguageSuggestion({ locale, availability }: { locale: Locale; availability: Record<string, string[]> }) {
  const pathname = usePathname();
  const preferred = useSyncExternalStore(noSubscription, readPreferredLocale, () => "");
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !hasLocale(preferred) || preferred === locale) return null;
  const target = counterpartPage(pathname, locale, preferred, availability);
  if (!target.exists) return null;
  const t = getDictionary(preferred).languageSuggestion;

  return (
    <div lang={preferred} className="border-b border-border bg-surface-muted">
      <div className="container-app flex items-center justify-between gap-3 py-2 text-sm">
        <p className="flex min-w-0 items-center gap-2 text-muted">
          <Languages className="size-4 shrink-0" aria-hidden />
          <span className="truncate">{t.message}</span>
        </p>
        <div className="flex shrink-0 items-center gap-1">
          <Link
            href={target.path}
            hrefLang={preferred}
            onClick={() => rememberLanguageChoice(preferred)}
            className="focus-ring rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            {t.action}
          </Link>
          <button
            type="button"
            onClick={() => {
              rememberLanguageChoice(locale);
              setDismissed(true);
            }}
            aria-label={t.dismiss}
            title={t.dismiss}
            className="focus-ring rounded-full p-1.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            <X className="size-3.5" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
