"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import type { CountrySummary } from "@/lib/types";
import { cn } from "@/lib/utils";

const DIACRITICS = new RegExp("[\\u0300-\\u036f]", "g");

function normalize(s: string): string {
  return s.normalize("NFD").replace(DIACRITICS, "").toLowerCase();
}

/** Type-ahead country search: filters the full registry client-side, navigates to a country page when it's live. */
export function CountrySearchBar({ countries }: { countries: CountrySummary[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return [];
    return countries.filter((c) => normalize(c.name).includes(q)).slice(0, 8);
  }, [query, countries]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function select(country: CountrySummary) {
    if (country.status !== "available") return;
    setOpen(false);
    setQuery("");
    router.push(`/${country.slug}`);
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-sm">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && results[0]) select(results[0]);
            if (e.key === "Escape") setOpen(false);
          }}
          placeholder="Rechercher un pays…"
          aria-label="Rechercher un pays"
          className="focus-ring w-full rounded-full border border-border bg-surface py-2.5 pl-9 pr-4 text-sm placeholder:text-muted"
        />
      </div>

      {open && results.length > 0 && (
        <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-lg">
          {results.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => select(c)}
                disabled={c.status !== "available"}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors",
                  c.status === "available" ? "hover:bg-surface-muted" : "cursor-default opacity-60",
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-lg leading-none">{c.flag}</span>
                  <span className="font-medium">{c.name}</span>
                </span>
                {c.status !== "available" && <span className="text-xs text-muted">Bientôt disponible</span>}
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && query.trim() && results.length === 0 && (
        <div className="absolute z-20 mt-2 w-full rounded-2xl border border-border bg-surface p-4 text-sm text-muted shadow-lg">
          Aucun pays ne correspond à « {query} ».
        </div>
      )}
    </div>
  );
}
