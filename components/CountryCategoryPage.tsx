import { CategoryNav } from "@/components/CategoryNav";
import { SECTION_COMPONENTS } from "@/components/sections";
import { getCategoryByKey } from "@/lib/categories";
import type { Country, CategoryKey } from "@/lib/types";

export function CountryCategoryPage({ country, category }: { country: Country; category: CategoryKey }) {
  const Section = SECTION_COMPONENTS[category];
  return (
    <div>
      <CategoryNav countrySlug={country.slug} activeSlug={getCategoryByKey(category).slug} />
      <div className="container-app py-8 sm:py-10">
        <Section country={country} />
      </div>
    </div>
  );
}
