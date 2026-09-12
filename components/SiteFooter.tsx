import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-app flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Données publiques, sourcées et datées. Présentation strictement factuelle.</p>
        <nav className="flex gap-4">
          <Link href="/pays" className="focus-ring rounded hover:text-foreground">
            Tous les pays
          </Link>
          <Link href="/comparer" className="focus-ring rounded hover:text-foreground">
            Comparer les pays
          </Link>
        </nav>
      </div>
    </footer>
  );
}
