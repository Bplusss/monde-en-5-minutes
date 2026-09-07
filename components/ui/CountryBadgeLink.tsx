"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

/**
 * A `Badge` naming another country, clickable everywhere it appears (geography
 * page, comparison view...). Navigates straight to the country page when it's
 * live; otherwise shows the same "bientôt disponible" toast as the world map,
 * so every entry is interactive without promising a page that doesn't exist yet.
 */
export function CountryBadgeLink({ name, slug, available }: { name: string; slug?: string; available: boolean }) {
  const [toast, setToast] = useState(false);

  const badge = (
    <Badge className="cursor-pointer transition-colors hover:border-foreground/30 hover:bg-surface">{name}</Badge>
  );

  if (available && slug) {
    return (
      <Link href={`/${slug}`} className="focus-ring rounded-full">
        {badge}
      </Link>
    );
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        className="focus-ring rounded-full"
        onClick={() => {
          setToast(true);
          window.setTimeout(() => setToast(false), 1800);
        }}
      >
        {badge}
      </button>
      <span
        role="status"
        className={cn(
          "pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium shadow-lg transition-opacity",
          toast ? "opacity-100" : "opacity-0",
        )}
      >
        {name} — bientôt disponible
      </span>
    </span>
  );
}
