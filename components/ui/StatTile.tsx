import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SourceTag } from "./SourceTag";

interface StatTileProps {
  label: string;
  value: string;
  icon?: ReactNode;
  source?: string;
  sourceUrl?: string;
  year?: number;
  accentText?: string;
  accentBg?: string;
  size?: "md" | "lg";
  className?: string;
}

/**
 * The core KPI building block. `value` must already be a fully-formed,
 * nowrap-safe string (see lib/format.ts) — this component never breaks it.
 */
export function StatTile({
  label,
  value,
  icon,
  source,
  sourceUrl,
  year,
  accentText = "text-foreground",
  accentBg = "bg-surface-muted",
  size = "md",
  className,
}: StatTileProps) {
  return (
    <div className={cn("min-w-0 rounded-2xl border border-border bg-surface p-4", className)}>
      <div className="flex min-w-0 items-center gap-2.5">
        {icon && (
          <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg", accentBg, accentText)}>
            {icon}
          </span>
        )}
        <div className="min-w-0">
          <p
            className={cn(
              "kpi-value min-w-0 font-display font-medium leading-tight",
              size === "lg" ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl",
              accentText,
            )}
          >
            {value}
          </p>
          <p className="truncate text-xs text-muted">{label}</p>
        </div>
      </div>
      {source && (
        <div className="mt-2 border-t border-border pt-2">
          <SourceTag source={source} sourceUrl={sourceUrl} year={year} />
        </div>
      )}
    </div>
  );
}
