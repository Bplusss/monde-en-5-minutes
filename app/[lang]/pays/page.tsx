import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorldMap } from "@/components/map/WorldMap";
import { CountryDirectory } from "@/components/CountryDirectory";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { localeAlternates } from "@/lib/i18n/alternates";
import { countriesPath } from "@/lib/i18n/routes";
import { getCountries } from "@/data/countries-localized";

export async function generateMetadata({ params }: PageProps<"/[lang]/pays">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.directory.metaTitle,
    description: t.directory.metaDescription,
    alternates: localeAlternates(lang, countriesPath),
  };
}

export default async function PaysPage({ params }: PageProps<"/[lang]/pays">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const countries = getCountries(lang);
  const available = countries.filter((c) => c.status === "available");

  return (
    <div className="container-app py-10 sm:py-14">
      <div className="mb-8 max-w-xl">
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{t.directory.title}</h1>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.directory.intro(available.length)}</p>
      </div>

      <div className="mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border sm:aspect-[21/9]">
        <WorldMap countries={countries} locale={lang} className="size-full" />
      </div>

      <CountryDirectory countries={countries} locale={lang} />
    </div>
  );
}
