"use client";

import { useRouter } from "next/navigation";
import { Shuffle } from "lucide-react";
import type { CountrySummary } from "@/lib/types";
import { type Locale, getDictionary } from "@/lib/i18n";
import { countryPath } from "@/lib/i18n/routes";

export function RandomCountryButton({ countries, locale }: { countries: CountrySummary[]; locale: Locale }) {
  const router = useRouter();

  function handleClick() {
    if (countries.length === 0) return;
    const pick = countries[Math.floor(Math.random() * countries.length)];
    router.push(countryPath(locale, pick.slug));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="focus-ring inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-sm text-muted transition-colors hover:text-foreground"
    >
      <Shuffle className="size-3.5" aria-hidden />
      {getDictionary(locale).home.randomCountry}
    </button>
  );
}
