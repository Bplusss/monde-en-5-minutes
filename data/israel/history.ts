import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer l'histoire d'une terre disputée et d'un État fondé en 1948 — pas un résumé exhaustif, ni un arbitrage entre récits.",
  periods: [
    {
      id: "antiquite",
      title: "Royaumes d'Israël et de Juda, puis domination des empires",
      startYear: -1000,
      endYear: 135,
      summary:
        "Les royaumes d'Israël et de Juda, attestés au début du Ier millénaire av. J.-C., sont détruits par l'Assyrie puis Babylone. Les révoltes juives contre Rome s'achèvent par la destruction du Temple (70) et la répression de Bar Kokhba (135), qui accélèrent la diaspora.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_ancient_Israel_and_Judah",
      events: [
        { date: "586 av. J.-C.", title: "Destruction du Premier Temple", description: "Babylone prend Jérusalem et déporte une partie des Judéens.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(587_BC)" },
        { date: "70", title: "Destruction du Second Temple", description: "Les légions de Titus prennent Jérusalem à l'issue de la grande révolte juive.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(70_CE)" },
      ],
    },
    {
      id: "palestine-medievale-ottomane",
      title: "Califats, croisades et Empire ottoman",
      startYear: 634,
      endYear: 1917,
      summary:
        "Conquise par les Arabes au VIIe siècle, la région s'arabise et s'islamise progressivement. Les croisés y fondent le royaume de Jérusalem (1099-1291), puis les Mamelouks et, à partir de 1516, les Ottomans la gouvernent pendant quatre siècles.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Palestine",
      events: [
        { date: "691", title: "Achèvement du Dôme du Rocher", description: "Le calife omeyyade fait édifier le sanctuaire sur l'esplanade du Temple, où se trouve aussi la mosquée al-Aqsa, troisième lieu saint de l'islam.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Dome_of_the_Rock" },
        { date: "1099", title: "Prise de Jérusalem par les croisés", description: "La première croisade fonde le royaume latin de Jérusalem.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(1099)" },
      ],
    },
    {
      id: "sionisme-mandat",
      title: "Sionisme et mandat britannique",
      startYear: 1882,
      endYear: 1948,
      summary:
        "Face aux pogroms et à l'antisémitisme européens, le sionisme politique de Theodor Herzl vise un foyer national juif en Palestine ottomane. Les vagues d'immigration (aliyot) s'intensifient sous le mandat britannique, sur fond d'affrontements croissants avec la population arabe. Après la Shoah, l'ONU recommande en 1947 un partage en deux États, accepté par les dirigeants sionistes et rejeté par les dirigeants arabes.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Mandatory_Palestine",
      events: [
        { date: "1897", title: "Premier congrès sioniste à Bâle", description: "Theodor Herzl fonde l'Organisation sioniste mondiale.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/First_Zionist_Congress" },
        { date: "2 novembre 1917", title: "Déclaration Balfour", description: "Le Royaume-Uni se déclare favorable à l'établissement d'un « foyer national pour le peuple juif » en Palestine.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Balfour_Declaration" },
        { date: "29 novembre 1947", title: "Plan de partage de l'ONU", description: "La résolution 181 recommande un État juif, un État arabe et un statut international pour Jérusalem.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/United_Nations_Partition_Plan_for_Palestine" },
      ],
    },
    {
      id: "etat-guerres",
      title: "Indépendance, guerres israélo-arabes et occupation",
      startYear: 1948,
      endYear: 1993,
      summary:
        "Israël proclame son indépendance en 1948 et l'emporte sur les armées arabes ; environ 700 000 Palestiniens fuient ou sont expulsés, ce que les Palestiniens appellent la Nakba (« catastrophe »). La guerre de 1967 lui donne le contrôle des territoires voisins, où il commence à établir des colonies. La paix avec l'Égypte (1979) lui fait restituer le Sinaï.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_Israel",
      events: [
        { date: "14 mai 1948", title: "Proclamation de l'État d'Israël", description: "David Ben Gourion proclame l'indépendance à Tel-Aviv ; les États arabes voisins entrent en guerre.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Israeli_Declaration_of_Independence" },
        { date: "5-10 juin 1967", title: "Guerre des Six Jours", description: "Israël prend le contrôle de la Cisjordanie, de Jérusalem-Est, de Gaza, du Sinaï et du Golan.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Six-Day_War" },
        { date: "octobre 1973", title: "Guerre du Kippour", description: "L'Égypte et la Syrie attaquent par surprise ; Israël repousse l'offensive au prix de lourdes pertes.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Yom_Kippur_War" },
        { date: "décembre 1987", title: "Première intifada", description: "Soulèvement palestinien dans les territoires occupés.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/First_Intifada" },
      ],
    },
    {
      id: "oslo-a-aujourdhui",
      title: "D'Oslo à la guerre de Gaza",
      startYear: 1993,
      endYear: "present",
      summary:
        "Les accords d'Oslo créent l'Autorité palestinienne, mais le processus de paix échoue après l'assassinat d'Yitzhak Rabin et la seconde intifada. Israël évacue Gaza en 2005 ; le Hamas y prend le pouvoir en 2007. L'attaque du Hamas du 7 octobre 2023 ouvre la guerre la plus meurtrière de l'histoire du conflit, étendue au Liban et à l'Iran.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Israeli%E2%80%93Palestinian_peace_process",
      events: [
        { date: "13 septembre 1993", title: "Accords d'Oslo", description: "Reconnaissance mutuelle entre Israël et l'Organisation de libération de la Palestine (OLP).", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Oslo_Accords" },
        { date: "4 novembre 1995", title: "Assassinat d'Yitzhak Rabin", description: "Le Premier ministre est tué par un extrémiste juif opposé aux accords.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Assassination_of_Yitzhak_Rabin" },
        { date: "2020", title: "Accords d'Abraham", description: "Normalisation avec les Émirats arabes unis, Bahreïn, puis le Maroc et le Soudan.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Abraham_Accords" },
        { date: "7 octobre 2023", title: "Attaque du Hamas et guerre de Gaza", description: "L'attaque tue 1 195 personnes en Israël et 251 otages sont emmenés à Gaza. Selon le ministère de la Santé de Gaza, plus de 74 000 Palestiniens ont été tués dans la guerre qui a suivi (74 022 au 28 septembre 2026). La Cour internationale de justice examine une accusation de génocide portée par l'Afrique du Sud, qu'Israël rejette.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Gaza_war" },
        { date: "10 octobre 2025", title: "Cessez-le-feu à Gaza", description: "Entrée en vigueur de la première phase du plan américain ; les 20 derniers otages vivants sont libérés le 13 octobre.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/Gaza_peace_plan" },
        { date: "28 février - 2 mars 2026", title: "Guerre contre l'Iran et le Hezbollah", description: "Après la guerre des Douze Jours (juin 2025), Israël et les États-Unis frappent l'Iran ; le Hezbollah ouvre un front au Liban, où l'armée israélienne mène une offensive terrestre ; une trêve conclue en juin 2026 est suivie d'un retrait israélien partiel du sud du pays.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/2026_Lebanon_war" },
      ],
    },
  ],
};
