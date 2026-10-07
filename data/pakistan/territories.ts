import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Pakistan est une fédération de quatre provinces (Pendjab, Sind, Khyber Pakhtunkhwa, Baloutchistan), dotées d'assemblées élues, et du territoire de la capitale Islamabad. Il administre aussi, au nord, le Gilgit-Baltistan et l'Azad Cachemire, deux territoires de l'ancien État princier du Jammu-et-Cachemire disputé avec l'Inde depuis 1947 : ils ont leurs propres institutions et ne sont pas des provinces au sens de la Constitution. Une ligne de contrôle, issue du cessez-le-feu de 1949, sépare les zones administrées par les deux pays, qui revendiquent chacun l'ensemble de la région. À l'ouest, la frontière avec l'Afghanistan, la ligne Durand tracée en 1893, n'a jamais été reconnue par Kaboul.",
  divisions: [
    { name: "Provinces", count: 4, source: "Constitution du Pakistan", sourceUrl: "https://na.gov.pk/en/downloads.php" },
    { name: "Territoire fédéral", count: 1, note: "Le territoire de la capitale Islamabad.", source: "Constitution du Pakistan", sourceUrl: "https://na.gov.pk/en/downloads.php" },
    { name: "Territoires administrés du Cachemire", count: 2, note: "Gilgit-Baltistan et Azad Jammu-et-Cachemire, à statut spécial en raison du différend avec l'Inde.", source: "Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Administrative_units_of_Pakistan" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
