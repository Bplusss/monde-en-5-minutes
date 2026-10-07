import type { LanguagesData } from "@/lib/types";

const CENSUS = "Pakistan Bureau of Statistics (recensement 2023)";
const CENSUS_URL = "https://www.pbs.gov.pk/digital-census/detailed-results";
const UNIT = "% de la population (langue maternelle)";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Ourdou",
      kind: "officielle",
      sharePercent: { value: 9.25, unit: UNIT, year: 2023, source: CENSUS, sourceUrl: CENSUS_URL },
      note: "Langue nationale et langue commune de tout le pays, apportée en 1947 par les musulmans venus de l'Inde (les mohajirs), mais langue maternelle d'une minorité seulement.",
    },
    {
      name: "Anglais",
      kind: "officielle",
      note: "Langue de l'administration, de la justice, de l'armée et de l'enseignement supérieur.",
    },
    {
      name: "Pendjabi",
      kind: "régionale",
      sharePercent: { value: 36.98, unit: UNIT, year: 2023, source: CENSUS, sourceUrl: CENSUS_URL },
      note: "Première langue maternelle du pays, parlée dans le Pendjab.",
    },
    {
      name: "Pachto",
      kind: "régionale",
      sharePercent: { value: 18.15, unit: UNIT, year: 2023, source: CENSUS, sourceUrl: CENSUS_URL },
      note: "Langue des Pachtounes du Khyber Pakhtunkhwa et du nord du Baloutchistan, également parlée en Afghanistan.",
    },
    {
      name: "Sindhi",
      kind: "régionale",
      sharePercent: { value: 14.31, unit: UNIT, year: 2023, source: CENSUS, sourceUrl: CENSUS_URL },
      note: "Seule langue régionale officielle d'une province, le Sind.",
    },
    {
      name: "Saraiki",
      kind: "régionale",
      sharePercent: { value: 12.0, unit: UNIT, year: 2023, source: CENSUS, sourceUrl: CENSUS_URL },
      note: "Parlé dans le sud du Pendjab, autour de Multan.",
    },
    {
      name: "Baloutchi",
      kind: "régionale",
      sharePercent: { value: 3.38, unit: UNIT, year: 2023, source: CENSUS, sourceUrl: CENSUS_URL },
    },
  ],
  summary:
    "Le Pakistan compte plus de 70 langues. L'ourdou, langue nationale écrite en alphabet arabo-persan, sert de langue commune alors qu'il n'est la langue maternelle que d'un habitant sur dix, surtout à Karachi. L'anglais, hérité de la colonisation, reste la langue du pouvoir et des élites. La question linguistique a pesé lourd dans l'histoire du pays : le refus d'accorder au bengali le statut de langue nationale a nourri, dès 1952, le mouvement qui a conduit à l'indépendance du Bangladesh en 1971.",
};
