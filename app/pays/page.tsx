import type { Metadata } from "next";
import { COUNTRIES } from "@/data/countries-registry";
import { WorldMap } from "@/components/map/WorldMap";
import { CountryDirectory } from "@/components/CountryDirectory";

export const metadata: Metadata = {
  title: "Pays",
  description: "La liste des pays disponibles sur Le Monde en 5 minutes, et ceux à venir.",
  alternates: { canonical: "/pays" },
};

export default function PaysPage() {
  const available = COUNTRIES.filter((c) => c.status === "available");

  return (
    <div className="container-app py-10 sm:py-14">
      <div className="mb-8 max-w-xl">
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Les pays</h1>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          {available.length} pays {available.length > 1 ? "sont" : "est"} entièrement disponible
          {available.length > 1 ? "s" : ""} pour le moment. Ils suivent le même modèle éditorial. Cliquez sur la
          carte pour explorer — zoomez pour atteindre les plus petits pays.
        </p>
      </div>

      <div className="mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border sm:aspect-[21/9]">
        <WorldMap className="size-full" />
      </div>

      <CountryDirectory countries={COUNTRIES} />
    </div>
  );
}
