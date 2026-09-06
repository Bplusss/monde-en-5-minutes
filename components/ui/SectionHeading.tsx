import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  accentText?: string;
  accentBg?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon,
  accentText = "text-foreground",
  accentBg = "bg-surface-muted",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-6", className)}>
      {eyebrow && (
        <div className="mb-2 flex items-center gap-2">
          {icon && (
            <span className={cn("flex size-7 items-center justify-center rounded-lg", accentBg, accentText)}>
              {icon}
            </span>
          )}
          <span className={cn("text-xs font-semibold uppercase tracking-wide", accentText)}>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
