import { cn } from "@/lib/utils";

interface BarProps {
  label: string;
  valueLabel: string;
  percent: number; // 0-100, share of the bar filled
  colorClass?: string;
  className?: string;
}

export function Bar({ label, valueLabel, percent, colorClass = "bg-brand", className }: BarProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className={cn("min-w-0", className)}>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <span className="min-w-0 truncate text-sm text-foreground">{label}</span>
        <span className="kpi-value shrink-0 text-sm font-medium text-foreground">{valueLabel}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface-muted">
        <div className={cn("h-full rounded-full", colorClass)} style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
}
