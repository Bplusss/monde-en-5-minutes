import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
}

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
        size === "md" ? "h-10 px-5 text-sm" : "h-8 px-3.5 text-xs",
        variant === "primary" && "bg-brand text-brand-foreground hover:opacity-90",
        variant === "secondary" && "border border-border bg-surface text-foreground hover:bg-surface-muted",
        variant === "ghost" && "text-foreground hover:bg-surface-muted",
        className,
      )}
      {...props}
    />
  );
}
