"use client";

import { useState } from "react";
import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { type Locale, getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { SourceTag } from "@/components/ui/SourceTag";
import { ScrollableTabs } from "@/components/ScrollableTabs";

export function HistorySection({ country, locale }: { country: Country; locale: Locale }) {
  const cat = getCategory("histoire")!;
  const t = getDictionary(locale).sections;
  const formatYear = (y: number) => (y < 0 ? t.yearBC(Math.abs(y)) : String(y));
  const { history } = country;
  const [activeId, setActiveId] = useState(history.periods[0].id);
  const active = history.periods.find((p) => p.id === activeId) ?? history.periods[0];

  return (
    <div>
      <SectionHeading
        eyebrow={cat.labels[locale]}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={t.historyTitle}
        description={history.intro}
      />

      {/* Period navigation — a simplified timeline, not a full chronology. */}
      <div className="mb-6">
        <ScrollableTabs activeKey={activeId} className="gap-2 px-1 pb-1">
          {history.periods.map((p) => {
            const isActive = p.id === active.id;
            return (
              <button
                key={p.id}
                data-active={isActive}
                onClick={() => setActiveId(p.id)}
                aria-pressed={isActive}
                className={cn(
                  "focus-ring shrink-0 rounded-2xl border px-4 py-3 text-left transition-colors",
                  isActive ? cn(cat.bg, cat.border, cat.text) : "border-border bg-surface text-muted hover:text-foreground",
                )}
              >
                <p className="whitespace-nowrap text-sm font-semibold">{p.title}</p>
                <p className="whitespace-nowrap text-[11px] opacity-80">
                  {formatYear(p.startYear)} – {p.endYear === "present" ? t.today : formatYear(p.endYear)}
                </p>
              </button>
            );
          })}
        </ScrollableTabs>
      </div>

      <Card>
        <CardContent className="pt-5">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-medium">{active.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{active.summary}</p>
            </div>
            <SourceTag source={active.source} sourceUrl={active.sourceUrl} locale={locale} />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">{t.milestones}</p>
          <ol className="flex flex-col gap-4 border-l-2 border-border pl-4">
            {active.events.map((ev) => (
              <li key={ev.title} className="relative">
                <span
                  className={cn("absolute -left-[21px] top-1.5 size-2.5 rounded-full ring-4 ring-surface", cat.bar)}
                  aria-hidden
                />
                <p className={cn("text-xs font-semibold", cat.text)}>{ev.date}</p>
                <p className="mt-0.5 text-sm font-semibold">{ev.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">{ev.description}</p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
