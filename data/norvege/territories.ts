import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "La Norvège continentale est divisée en comtés (fylker), eux-mêmes découpés en communes (kommuner). Le royaume administre aussi plusieurs territoires arctiques dépendants, au statut particulier, dont le Svalbard.",
  divisions: [
    { name: "Comtés (fylker)", count: 15, note: "Depuis la réforme du 1ᵉʳ janvier 2024.", source: "Kartverket", sourceUrl: "https://www.kartverket.no/en" },
    { name: "Communes (kommuner)", count: 357, source: "SSB (Statistisk sentralbyrå)", sourceUrl: "https://www.ssb.no/en/" },
  ],
  metropolitanRegions: regions,
  overseasMapGeojsonUrl: "/geo/norvege-overseas.json",
  overseas: [
    {
      name: "Svalbard",
      status: "Territoire à statut spécial sous souveraineté norvégienne (Traité du Svalbard, 1920), démilitarisé et ouvert aux ressortissants des États signataires.",
      population: {
        value: 2_556,
        year: 2025,
        source: "SSB (Statistisk sentralbyrå)",
        sourceUrl: "https://www.ssb.no/en/befolkning/folketall/statistikk/befolkningen-pa-svalbard",
      },
      mapGroupId: "svalbard",
    },
    {
      name: "Jan Mayen",
      status: "Île volcanique inhabitée en permanence, occupée par une station météorologique et une base militaire norvégienne.",
      mapGroupId: "jan-mayen",
    },
  ],
};
