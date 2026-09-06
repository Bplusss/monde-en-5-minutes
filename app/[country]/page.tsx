import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryCategoryPage } from "@/components/CountryCategoryPage";
import { FULL_COUNTRIES, getFullCountry } from "@/data/countries-full";

export function generateStaticParams() {
  return Object.keys(FULL_COUNTRIES).map((country) => ({ country }));
}

export async function generateMetadata({ params }: PageProps<"/[country]">): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getFullCountry(slug);
  if (!country) return {};
  return {
    title: country.name,
    description: `Découvrez ${country.nameWithArticle} en quelques minutes : géographie, population, langues, religion, politique, économie, histoire, culture, territoire et curiosités.`,
    alternates: { canonical: `/${country.slug}` },
  };
}

export default async function CountryPage({ params }: PageProps<"/[country]">) {
  const { country: slug } = await params;
  const country = getFullCountry(slug);
  if (!country) notFound();

  return <CountryCategoryPage country={country} category="geographie" />;
}
