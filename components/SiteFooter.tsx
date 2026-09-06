import Link from "next/link";
import { FULL_COUNTRIES } from "@/data/countries-full";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-app flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Données publiques, sourcées et datées. Présentation strictement factuelle.</p>
        <nav className="flex gap-4">
          <Link href="/pays" className="focus-ring rounded hover:text-foreground">
            Pays
          </Link>
          {Object.values(FULL_COUNTRIES).map((country) => (
            <Link key={country.slug} href={`/${country.slug}`} className="focus-ring rounded hover:text-foreground">
              {country.name}
            </Link>
          ))}
          <Link href="/comparer" className="focus-ring rounded hover:text-foreground">
            Comparer
          </Link>
        </nav>
      </div>
    </footer>
  );
}
