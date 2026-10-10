import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MousePointerClick } from "lucide-react";
import { WorldMap } from "@/components/map/WorldMap";
import { CountrySearchBar } from "@/components/CountrySearchBar";
import { RandomCountryButton } from "@/components/RandomCountryButton";
import { CATEGORIES } from "@/lib/categories";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { localeAlternates } from "@/lib/i18n/alternates";
import { homePath } from "@/lib/i18n/routes";
import { getAvailableCountries, getCountries } from "@/data/countries-localized";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { alternates: localeAlternates(lang, homePath) };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const countries = getCountries(lang);

  return (
    <div>
      <section className="border-b border-border">
        <div className="container-app grid gap-8 py-8 sm:py-10 lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
              {t.home.titleLine1}
              <br />
              {t.home.titleLine2}
            </h1>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted">{t.home.intro}</p>
            <div className="mt-6">
              <CountrySearchBar countries={countries} locale={lang} />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <RandomCountryButton countries={getAvailableCountries(lang)} locale={lang} />
            </div>
          </div>

          <div>
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border sm:aspect-[16/9]">
              <WorldMap countries={countries} locale={lang} className="size-full" />
            </div>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm text-muted">
              <MousePointerClick className="size-3.5" aria-hidden />
              {t.home.mapHint}
            </p>
          </div>
        </div>
      </section>

      <section className="container-app py-8 sm:py-10">
        <div className="mb-6 max-w-lg">
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">{t.home.anglesTitle}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.home.anglesIntro}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.key}
              className="flex flex-col items-start gap-2.5 rounded-2xl border border-border bg-surface p-4"
            >
              <span className={`flex size-9 items-center justify-center rounded-lg ${cat.bg} ${cat.text}`}>
                <cat.icon className="size-4" aria-hidden />
              </span>
              <span className="text-sm font-medium leading-snug">{cat.labels[lang]}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
