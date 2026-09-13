import type { TerritoriesData } from "@/lib/types";
import { regions } from "./regions";

export const territories: TerritoriesData = {
  summary:
    "Le Brésil est une fédération de 26 États et d'un District fédéral (Brasília), eux-mêmes subdivisés en plus de 5 570 communes (municípios). Contrairement à d'autres grandes puissances issues de la colonisation, le pays ne possède aucun territoire d'outre-mer ou non contigu : l'archipel de Fernando de Noronha, au large du Nordeste, souvent cité pour ses plages et sa réserve marine classée à l'UNESCO, n'est pas un territoire distinct mais un district administratif rattaché à l'État du Pernambuco depuis 1988.",
  divisions: [
    { name: "États fédérés", count: 26, source: "IBGE", sourceUrl: "https://www.ibge.gov.br/" },
    { name: "District fédéral", count: 1, note: "Brasília, siège du gouvernement fédéral.", source: "IBGE", sourceUrl: "https://www.ibge.gov.br/" },
    { name: "Communes (municípios)", count: 5_570, source: "IBGE", sourceUrl: "https://www.ibge.gov.br/" },
  ],
  metropolitanRegions: regions,
  overseas: [],
};
