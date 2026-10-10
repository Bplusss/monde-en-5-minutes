import { CategoryNav } from "@/components/CategoryNav";
import { SECTION_COMPONENTS } from "@/components/sections";
import type { Locale } from "@/lib/i18n";
import type { Country, CategoryKey } from "@/lib/types";

export function CountryCategoryPage({ country, category, locale }: { country: Country; category: CategoryKey; locale: Locale }) {
  const Section = SECTION_COMPONENTS[category];
  return (
    <div>
      <CategoryNav countrySlug={country.slug} activeKey={category} locale={locale} />
      <div className="container-app py-8 sm:py-10">
        <Section country={country} locale={locale} />
      </div>
    </div>
  );
}
