import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-border bg-surface-muted px-2.5 py-1 text-xs font-medium text-foreground",
        className,
      )}
      {...props}
    />
  );
}
