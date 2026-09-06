import { notFound } from "next/navigation";
import { CountryHeader } from "@/components/CountryHeader";
import { getFullCountry } from "@/data/countries-full";

export default async function CountryLayout({ children, params }: LayoutProps<"/[country]">) {
  const { country: slug } = await params;
  const country = getFullCountry(slug);
  if (!country) notFound();

  return (
    <div>
      <CountryHeader country={country} />
      {children}
    </div>
  );
}
