import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryCategoryPage } from "@/components/CountryCategoryPage";
import { FULL_COUNTRIES, getFullCountry, getFullCountryWithLiveData } from "@/data/countries-full";
import { CATEGORIES, getCategory } from "@/lib/categories";
import type { CategoryKey } from "@/lib/types";

export const revalidate = 3600;

export function generateStaticParams() {
  return Object.keys(FULL_COUNTRIES).flatMap((country) =>
    CATEGORIES.map((c) => ({ country, category: c.slug })),
  );
}

export async function generateMetadata({ params }: PageProps<"/[country]/[category]">): Promise<Metadata> {
  const { country: countrySlug, category: categorySlug } = await params;
  const country = getFullCountry(countrySlug);
  const cat = getCategory(categorySlug);
  if (!country || !cat) return {};
  const isDefault = cat.slug === "geographie";
  return {
    title: `${cat.label} — ${country.name}`,
    description: `${cat.label} de ${country.nameWithArticle} : données publiques, sourcées et à jour, présentées de façon claire et visuelle.`,
    alternates: { canonical: isDefault ? `/${country.slug}` : `/${country.slug}/${cat.slug}` },
  };
}

export default async function CountryCategoryRoute({ params }: PageProps<"/[country]/[category]">) {
  const { country: countrySlug, category: categorySlug } = await params;
  const country = await getFullCountryWithLiveData(countrySlug);
  const cat = getCategory(categorySlug);
  if (!country || !cat) notFound();

  return <CountryCategoryPage country={country} category={cat.key as CategoryKey} />;
}
