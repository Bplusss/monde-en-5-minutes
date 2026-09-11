import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryCategoryPage } from "@/components/CountryCategoryPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FULL_COUNTRIES, getFullCountry, getFullCountryWithLiveData } from "@/data/countries-full";

export const revalidate = 3600;

export function generateStaticParams() {
  return Object.keys(FULL_COUNTRIES).map((country) => ({ country }));
}

export async function generateMetadata({ params }: PageProps<"/[country]">): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getFullCountry(slug);
  if (!country) return {};
  return {
    title: country.name,
    description: `Découvrez ${country.nameWithArticle} en quelques minutes : géographie et territoire, population, langues, religions, politique, économie, histoire, culture, environnement, et l'essentiel à retenir.`,
    alternates: { canonical: `/${country.slug}` },
  };
}

export default async function CountryPage({ params }: PageProps<"/[country]">) {
  const { country: slug } = await params;
  const country = await getFullCountryWithLiveData(slug);
  if (!country) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Pays", url: "/pays" },
          { name: country.name, url: `/${country.slug}` },
        ]}
      />
      <CountryCategoryPage country={country} category="geographie" />
    </>
  );
}
