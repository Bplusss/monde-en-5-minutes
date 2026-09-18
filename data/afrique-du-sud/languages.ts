import type { LanguagesData } from "@/lib/types";

const SRC = "Statistics South Africa (Stats SA), recensement 2022";
const URL = "https://census.statssa.gov.za/";

export const languages: LanguagesData = {
  entries: [
    { name: "isiZulu", kind: "officielle", sharePercent: { value: 24.4, unit: "% des ménages (langue parlée le plus souvent à la maison)", year: 2022, source: SRC, sourceUrl: URL, note: "Langue la plus parlée du pays, majoritaire au KwaZulu-Natal." } },
    { name: "isiXhosa", kind: "officielle", sharePercent: { value: 16.3, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Dominante dans le Cap-Oriental ; langue maternelle de Nelson Mandela et Thabo Mbeki." } },
    { name: "Afrikaans", kind: "officielle", sharePercent: { value: 10.6, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Issue du néerlandais des colons du XVIIe siècle, en recul constant depuis la fin de l'apartheid (14,5 % en 1996) ; dominante dans le Cap-Occidental et le Cap-Nord, parlée par une majorité de métis (« coloured ») autant que par les Afrikaners blancs." } },
    { name: "Anglais", kind: "officielle", sharePercent: { value: 8.7, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Langue maternelle d'une minorité de la population mais langue dominante des affaires, du gouvernement, de l'enseignement supérieur et des médias nationaux." } },
    { name: "Sepedi (sesotho sa Leboa)", kind: "officielle", sharePercent: { value: 10.0, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Dominante au Limpopo." } },
    { name: "Setswana", kind: "officielle", sharePercent: { value: 8.3, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Dominante au Nord-Ouest." } },
    { name: "Sesotho", kind: "officielle", sharePercent: { value: 7.8, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Dominante à l'État-Libre, autour du royaume enclavé du Lesotho." } },
    { name: "Xitsonga", kind: "officielle", sharePercent: { value: 4.7, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL } },
    { name: "siSwati", kind: "officielle", sharePercent: { value: 2.8, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Parlée près de la frontière avec l'Eswatini (ex-Swaziland)." } },
    { name: "Tshivenda", kind: "officielle", sharePercent: { value: 2.5, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL } },
    { name: "isiNdebele", kind: "officielle", sharePercent: { value: 1.7, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Langue officielle la moins parlée du pays." } },
    { name: "Langue des signes sud-africaine et langues étrangères", kind: "parlée", note: "La langue des signes sud-africaine (SASL) a rejoint la liste des langues officielles en 2023, portant leur nombre à 12 ; s'y ajoutent des langues immigrées ou régionales non officielles (khoï, nama, san notamment, en cours de revitalisation après avoir quasiment disparu)." },
  ],
  summary:
    "L'Afrique du Sud reconnaît onze langues officielles depuis la Constitution de 1996 — un record mondial destiné à rompre avec la domination exclusive de l'anglais et de l'afrikaans sous l'apartheid — auxquelles s'est ajoutée en 2023 la langue des signes sud-africaine comme douzième langue officielle. Aucune langue n'est majoritaire : l'isiZulu arrive en tête avec moins d'un quart des ménages, suivi de l'isiXhosa, de l'afrikaans puis de l'anglais, qui reste toutefois la langue de facto de l'administration nationale, des affaires et de l'enseignement supérieur malgré son faible poids démographique. Cette politique multilingue se heurte en pratique à des moyens limités : l'anglais et l'afrikaans dominent toujours largement l'administration centrale et la justice, tandis que l'enseignement dans les langues africaines reste concentré sur les premières années de scolarité.",
};
