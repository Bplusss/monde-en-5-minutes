"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Country, HistoricalPeriod } from "@/lib/types";
import { CompareColumns } from "../CompareColumns";
import { SourceTag } from "@/components/ui/SourceTag";
import { cn } from "@/lib/utils";

function formatYear(y: number) {
  return y < 0 ? `${Math.abs(y)} av. J.-C.` : String(y);
}

function PeriodItem({ period }: { period: HistoricalPeriod }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="focus-ring flex w-full items-start justify-between gap-2 rounded-lg py-1 text-left"
      >
        <span className="min-w-0">
          <span className="block text-sm font-medium">{period.title}</span>
          <span className="block text-xs text-muted">
            {formatYear(period.startYear)} – {period.endYear === "present" ? "aujourd'hui" : formatYear(period.endYear)}
          </span>
        </span>
        <ChevronDown
          className={cn("mt-1 size-3.5 shrink-0 text-muted transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open && (
        <div className="mb-1 mt-2 border-l-2 border-border pl-3">
          <p className="text-xs leading-relaxed text-muted">{period.summary}</p>
          {period.events.length > 0 && (
            <ul className="mt-2 flex flex-col gap-1.5">
              {period.events.map((ev) => (
                <li key={ev.title} className="text-xs leading-relaxed">
                  <span className="font-semibold">{ev.date}</span> — {ev.title}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-2">
            <SourceTag source={period.source} sourceUrl={period.sourceUrl} />
          </div>
        </div>
      )}
    </li>
  );
}

export function HistoryCompare({ a, b }: { a: Country; b: Country }) {
  return (
    <CompareColumns
      a={a}
      b={b}
      render={(c) => (
        <>
          <p className="mb-1 text-sm font-semibold">{c.name}</p>
          <p className="mb-4 text-xs text-muted">Cliquez une période pour voir le détail.</p>
          <ol className="flex flex-col gap-3 border-l-2 border-border pl-4">
            {c.history.periods.map((p) => (
              <PeriodItem key={p.id} period={p} />
            ))}
          </ol>
        </>
      )}
    />
  );
}
