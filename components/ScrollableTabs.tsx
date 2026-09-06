"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Generic horizontal tab scroller: chevrons + edge fade appear only when
 * there's actually more content off-screen. Shared by every horizontal tab
 * bar on the site (country category nav, comparison category tabs) so this
 * behavior can't drift between them again.
 */
export function ScrollableTabs({
  activeKey,
  children,
  className,
}: {
  /** Changing this re-scrolls the active tab (marked with `data-active="true"`) into view. */
  activeKey: string;
  children: ReactNode;
  className?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);
    el.querySelector('[data-active="true"]')?.scrollIntoView({ block: "nearest", inline: "center" });
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey, updateScrollState]);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Précédent"
          className="focus-ring absolute left-1 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface shadow-sm sm:left-2"
        >
          <ChevronLeft className="size-3.5" aria-hidden />
        </button>
      )}

      <div
        ref={scrollerRef}
        className={cn(
          "no-scrollbar flex gap-1 overflow-x-auto",
          canScrollLeft && "pl-9",
          canScrollRight && "pr-9",
          className,
        )}
        style={{
          maskImage: `linear-gradient(to right, ${canScrollLeft ? "transparent, black 24px" : "black"}, black ${canScrollRight ? "calc(100% - 24px), transparent" : "100%"})`,
        }}
      >
        {children}
      </div>

      {canScrollRight && (
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Suivant"
          className="focus-ring absolute right-1 top-1/2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface shadow-sm sm:right-2"
        >
          <ChevronRight className="size-3.5" aria-hidden />
        </button>
      )}
    </div>
  );
}
