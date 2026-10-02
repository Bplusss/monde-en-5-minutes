import type { EnvironmentData } from "@/lib/types";

const EMBER = "Ember";
const EMBER_URL = "https://ember-energy.org/countries-and-regions/viet-nam/";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 45,
    unit: "%",
    year: 2025,
    source: EMBER,
    sourceUrl: EMBER_URL,
    note: "Part des renouvelables dans la production d'électricité : surtout l'hydroélectricité (33 %), complétée par le solaire (7 %) et l'éolien (5 %), dont l'essor date de 2019-2020.",
  },
  co2PerCapita: {
    value: 4.3,
    unit: "t",
    year: 2024,
    source: "Banque mondiale",
    sourceUrl: "https://data.worldbank.org/indicator/EN.GHG.CO2.PC.CE.AR5?locations=VN",
    note: "En hausse rapide (3,5 t en 2022) avec l'industrialisation et la consommation de charbon.",
  },
  indicators: [
    {
      label: "Part du charbon dans l'électricité",
      value: { value: 48, unit: "%", year: 2025, source: EMBER, sourceUrl: EMBER_URL, note: "Le pays s'est engagé à la neutralité carbone en 2050 et bénéficie depuis 2022 d'un partenariat pour une transition énergétique juste (JETP) avec le G7." },
    },
    {
      label: "Part de l'hydroélectricité dans l'électricité",
      value: { value: 33, unit: "%", year: 2025, source: EMBER, sourceUrl: EMBER_URL },
    },
    {
      label: "Couverture forestière",
      value: { value: 47.4, unit: "%", year: 2023, source: "Banque mondiale", sourceUrl: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS?locations=VN", note: "En progression grâce aux reboisements, souvent en plantations d'acacias et d'eucalyptus, après la déforestation due à la guerre et à l'agriculture." },
    },
  ],
  risks: [
    "Typhons et inondations, surtout sur la côte centrale (septembre-décembre)",
    "Montée de la mer, affaissement des sols et salinisation dans le delta du Mékong",
    "Pollution de l'air à Hanoï et Hô Chi Minh-Ville",
    "Glissements de terrain dans les montagnes du Nord",
    "Dépendance aux barrages construits en amont sur le Mékong et le fleuve Rouge",
  ],
  risksSource: { source: "Banque mondiale, Climate Change Knowledge Portal / Wikipedia", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Vietnam" },
  summary:
    "Avec plus de 3 000 km de côtes et deux grands deltas très bas, le Vietnam est l'un des pays les plus exposés au changement climatique. Le delta du Mékong, qui produit environ la moitié du riz national, s'enfonce et se salinise sous l'effet du pompage des nappes, de la rétention des sédiments par les barrages en amont et de la montée de la mer. En 2024, le typhon Yagi, le plus violent à frapper le Nord depuis des décennies, a fait plusieurs centaines de morts et disparus. Le charbon, développé pour suivre la demande industrielle, fournit encore près de la moitié de l'électricité.",
};
