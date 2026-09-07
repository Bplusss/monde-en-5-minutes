import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

const IWEPS = "Iweps";
const IWEPS_URL = "https://www.iweps.be/indicateur-statistique/structure-administrative-territoire/";

export const territories: TerritoriesData = {
  summary:
    "L'État fédéral belge se superpose à trois Régions (Flandre, Wallonie, Bruxelles-Capitale) et trois Communautés linguistiques (flamande, française, germanophone), qui ne se recoupent pas exactement. La Wallonie et la Flandre sont elles-mêmes divisées en provinces, puis en communes. La Belgique ne possède aucun territoire d'outre-mer depuis l'indépendance du Congo belge en 1960.",
  divisions: [
    { name: "Régions", count: 3, note: "Flandre, Wallonie, Bruxelles-Capitale.", source: IWEPS, sourceUrl: IWEPS_URL },
    { name: "Provinces", count: 10, note: "Bruxelles-Capitale n'est divisée en aucune province.", source: IWEPS, sourceUrl: IWEPS_URL },
    { name: "Communes", count: 565, note: "Depuis la fusion de 28 communes flamandes au 1ᵉʳ janvier 2025.", source: IWEPS, sourceUrl: IWEPS_URL },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
