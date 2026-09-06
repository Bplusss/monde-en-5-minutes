import type { Metadata } from "next";
import { CompareSelector } from "@/components/compare/CompareSelector";

export const metadata: Metadata = {
  title: "Comparer deux pays",
  description: "Comparez la population, la superficie, la densité et l'économie de deux pays, côte à côte.",
  alternates: { canonical: "/comparer" },
};

export default function ComparerPage() {
  return (
    <div className="container-app py-10 sm:py-14">
      <div className="mb-8 max-w-xl">
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Comparer deux pays</h1>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          Une comparaison visuelle, pensée pour n&apos;importe quelle paire de pays disponibles.
        </p>
      </div>
      <CompareSelector />
    </div>
  );
}
