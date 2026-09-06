import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SourceTagProps {
  source: string;
  sourceUrl?: string;
  year?: number;
  className?: string;
}

/**
 * Discreet, uniform source attribution. Never renders a raw URL — the link,
 * when present, opens the real source; the label stays short ("INSEE · 2025").
 */
export function SourceTag({ source, sourceUrl, year, className }: SourceTagProps) {
  const label = year ? `${source} · ${year}` : source;

  if (!sourceUrl) {
    return (
      <span className={cn("inline-flex items-center gap-1 text-[11px] text-muted", className)}>
        Source : {label}
      </span>
    );
  }

  return (
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "focus-ring inline-flex items-center gap-1 text-[11px] text-muted underline decoration-dotted underline-offset-2 transition-colors hover:text-foreground",
        className,
      )}
    >
      Source : {label}
      <ExternalLink className="size-2.5 shrink-0" aria-hidden />
    </a>
  );
}
