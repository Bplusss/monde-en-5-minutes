import type { CountrySortMode } from "@/lib/country-sort";
import { type Locale, getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SortToggle({
  value,
  onChange,
  locale,
}: {
  value: CountrySortMode;
  onChange: (mode: CountrySortMode) => void;
  locale: Locale;
}) {
  const t = getDictionary(locale);
  return (
    <div className="inline-flex rounded-full border border-border bg-surface-muted p-0.5 text-xs font-medium">
      {(["alpha", "continent"] as const).map((mode) => (
        <button
          key={mode}
          type="button"
          onClick={() => onChange(mode)}
          aria-pressed={value === mode}
          className={cn(
            "rounded-full px-3 py-1.5 transition-colors",
            value === mode ? "bg-surface text-foreground shadow-sm" : "text-muted hover:text-foreground",
          )}
        >
          {mode === "alpha" ? t.directory.sortAlpha : t.directory.sortContinent}
        </button>
      ))}
    </div>
  );
}
