import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CompareSelector } from "@/components/compare/CompareSelector";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { localeAlternates } from "@/lib/i18n/alternates";
import { comparePath } from "@/lib/i18n/routes";
import { getCountries } from "@/data/countries-localized";

export async function generateMetadata({ params }: PageProps<"/[lang]/comparer">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.compare.metaTitle,
    description: t.compare.metaDescription,
    alternates: localeAlternates(lang, (l) => comparePath(l)),
  };
}

export default async function ComparerPage({ params }: PageProps<"/[lang]/comparer">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <div className="container-app py-10 sm:py-14">
      <div className="mb-8 max-w-xl">
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{t.compare.title}</h1>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.compare.intro}</p>
      </div>
      <Suspense fallback={null}>
        <CompareSelector countries={getCountries(lang)} locale={lang} />
      </Suspense>
    </div>
  );
}
