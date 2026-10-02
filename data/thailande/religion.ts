import type { ReligionData } from "@/lib/types";

export const religion: ReligionData = {
  surveyName: "Enquête pilote de recensement (NSO)",
  year: 2018,
  ageScope: "Population totale",
  source: "Office national de la statistique de Thaïlande (NSO), enquête 2018",
  sourceUrl: "https://en.wikipedia.org/wiki/Religion_in_Thailand",
  points: [
    { label: "Bouddhisme", sharePercent: 93.46 },
    { label: "Islam", sharePercent: 5.37 },
    { label: "Christianisme", sharePercent: 1.13 },
    { label: "Autres et sans religion", sharePercent: 0.04 },
  ],
  summary:
    "Le bouddhisme theravada imprègne la vie sociale : de nombreux hommes passent quelques semaines ou quelques mois comme moines, et le pays compte plus de 40 000 temples (wat). La Constitution ne fixe pas de religion d'État, mais elle exige que le roi soit bouddhiste et charge l'État de protéger le bouddhisme. L'islam, majoritaire dans les provinces malaises du Sud profond, est la principale minorité. La pratique populaire mêle bouddhisme, culte des esprits et divinités hindoues.",
  methodologyNote:
    "Les cultes chinois (taoïsme, confucianisme) et les croyances animistes ne sont pas comptés à part : leurs pratiquants sont généralement recensés comme bouddhistes.",
};
