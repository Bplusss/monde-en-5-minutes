import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryCategoryPage } from "@/components/CountryCategoryPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FULL_COUNTRIES, getFullCountry, getFullCountryWithLiveData } from "@/data/countries-full";
import { categoryDescription } from "@/lib/seo-description";

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
    description: categoryDescription(country, "geographie"),
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
