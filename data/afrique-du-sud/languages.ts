import type { LanguagesData } from "@/lib/types";

const SRC = "Statistics South Africa (Stats SA), recensement 2022";
const URL = "https://census.statssa.gov.za/";

export const languages: LanguagesData = {
  entries: [
    { name: "isiZulu", kind: "officielle", sharePercent: { value: 24.4, unit: "% des ménages (langue parlée le plus souvent à la maison)", year: 2022, source: SRC, sourceUrl: URL, note: "Langue la plus parlée du pays, majoritaire au KwaZulu-Natal." } },
    { name: "isiXhosa", kind: "officielle", sharePercent: { value: 16.3, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Dominante dans le Cap-Oriental ; langue maternelle de Nelson Mandela et Thabo Mbeki." } },
    { name: "Afrikaans", kind: "officielle", sharePercent: { value: 10.6, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "En recul depuis la fin de l'apartheid (14,5 % en 1996) ; dominante au Cap-Occidental, parlée autant par les métis (« coloured ») que par les Afrikaners blancs." } },
    { name: "Anglais", kind: "officielle", sharePercent: { value: 8.7, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Minoritaire mais langue dominante des affaires, du gouvernement et de l'enseignement supérieur." } },
    { name: "Sepedi (sesotho sa Leboa)", kind: "officielle", sharePercent: { value: 10.0, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Dominante au Limpopo." } },
    { name: "Setswana", kind: "officielle", sharePercent: { value: 8.3, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Dominante au Nord-Ouest." } },
    { name: "Sesotho", kind: "officielle", sharePercent: { value: 7.8, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Dominante à l'État-Libre, autour du royaume enclavé du Lesotho." } },
    { name: "Xitsonga", kind: "officielle", sharePercent: { value: 4.7, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL } },
    { name: "siSwati", kind: "officielle", sharePercent: { value: 2.8, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Parlée près de la frontière avec l'Eswatini (ex-Swaziland)." } },
    { name: "Tshivenda", kind: "officielle", sharePercent: { value: 2.5, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL } },
    { name: "isiNdebele", kind: "officielle", sharePercent: { value: 1.7, unit: "% des ménages", year: 2022, source: SRC, sourceUrl: URL, note: "Langue officielle la moins parlée du pays." } },
    { name: "Langue des signes sud-africaine et langues étrangères", kind: "parlée", note: "La langue des signes sud-africaine (SASL) a rejoint la liste des langues officielles en 2023 (douzième), aux côtés de langues régionales non officielles (khoï, nama, san) en cours de revitalisation." },
  ],
  summary:
    "L'Afrique du Sud reconnaît onze langues officielles depuis la Constitution de 1996 — un record mondial — auxquelles s'est ajoutée en 2023 la langue des signes sud-africaine. Aucune n'est majoritaire : l'isiZulu arrive en tête avec moins d'un quart des ménages, devant l'isiXhosa, l'afrikaans puis l'anglais, qui reste néanmoins la langue de facto de l'administration, des affaires et de l'enseignement supérieur malgré son faible poids démographique.",
};
