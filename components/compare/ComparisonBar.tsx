import { cn } from "@/lib/utils";

interface ComparisonBarProps {
  valueLabel: string;
  percent: number;
  colorClass: string;
  align?: "left" | "right";
}

export function ComparisonBar({ valueLabel, percent, colorClass, align = "left" }: ComparisonBarProps) {
  const clamped = Math.max(4, Math.min(100, percent));
  return (
    <div className={cn("flex min-w-0 items-center gap-2", align === "right" && "flex-row-reverse")}>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-muted">
        <div
          className={cn("h-full rounded-full", colorClass, align === "right" && "ml-auto")}
          style={{ width: `${clamped}%` }}
        />
      </div>
      <span className="kpi-value shrink-0 text-sm font-semibold">{valueLabel}</span>
    </div>
  );
}
