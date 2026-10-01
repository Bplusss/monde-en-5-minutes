import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de l'histoire sénégalaise — pas un résumé exhaustif.",
  periods: [
    {
      id: "royaumes-precoloniaux",
      title: "Royaumes sahéliens et diffusion de l'islam",
      startYear: 800,
      endYear: 1444,
      summary:
        "Le royaume du Tekrour, dans la vallée du fleuve Sénégal, est l'un des premiers États d'Afrique de l'Ouest à adopter l'islam, au XIe siècle. Au XIIIe siècle se forme l'empire du Djolof, qui fédère les royaumes wolofs (Walo, Cayor, Baol) avant de se fragmenter au XVIe siècle ; au centre-ouest, les royaumes sérères du Sine et du Saloum restent longtemps autonomes.",
      source: WIKIPEDIA,
      sourceUrl: "https://fr.wikipedia.org/wiki/Histoire_du_S%C3%A9n%C3%A9gal",
      events: [
        { date: "XIe siècle", title: "Islamisation du Tekrour", description: "Le roi War Jaabi se convertit à l'islam, qui se diffuse ensuite par le commerce transsaharien.", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/Tekrour" },
        { date: "XIIIe-XVIe siècles", title: "Empire du Djolof", description: "Fondé selon la tradition par Ndiadiane Ndiaye, il domine les royaumes wolofs jusqu'à la bataille de Danki (vers 1549).", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/Empire_du_Djolof" },
      ],
    },
    {
      id: "traite-colonisation",
      title: "Comptoirs européens, traite et conquête française",
      startYear: 1444,
      endYear: 1960,
      summary:
        "Les Portugais atteignent le Cap-Vert en 1444 ; Néerlandais, Anglais et Français se disputent ensuite les comptoirs de Gorée et de Saint-Louis, fondée en 1659, d'où partent esclaves, gomme et or. Après l'abolition de l'esclavage (1848), le gouverneur Faidherbe engage la conquête de l'intérieur, achevée à la fin du XIXe siècle malgré les résistances, dont celle de Lat Dior, damel du Cayor. Dakar devient en 1902 la capitale de l'Afrique-Occidentale française. Les habitants des « Quatre Communes » (Saint-Louis, Gorée, Rufisque, Dakar) jouissent de droits politiques : Blaise Diagne devient en 1914 le premier député noir africain à l'Assemblée nationale française.",
      source: WIKIPEDIA,
      sourceUrl: "https://fr.wikipedia.org/wiki/Colonie_du_S%C3%A9n%C3%A9gal",
      events: [
        { date: "1659", title: "Fondation de Saint-Louis", description: "Premier établissement français durable en Afrique de l'Ouest, capitale de la colonie jusqu'en 1902.", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/Saint-Louis_(S%C3%A9n%C3%A9gal)" },
        { date: "1886", title: "Mort de Lat Dior", description: "Le damel du Cayor, opposé au chemin de fer Dakar-Saint-Louis, est tué à Dekhelé.", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/Lat_Dior" },
        { date: "1895", title: "Exil de Cheikh Ahmadou Bamba", description: "Le fondateur du mouridisme est déporté au Gabon par l'administration coloniale ; son retour fait de Touba un lieu de pèlerinage.", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/Cheikh_Ahmadou_Bamba" },
        { date: "1er décembre 1944", title: "Massacre de Thiaroye", description: "Des tirailleurs africains réclamant leur solde sont tués par l'armée française au camp de Thiaroye, près de Dakar.", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/Massacre_de_Thiaroye" },
      ],
    },
    {
      id: "senghor-diouf",
      title: "Indépendance, Senghor et Diouf",
      startYear: 1960,
      endYear: 2000,
      summary:
        "Indépendant en 1960 au sein de la Fédération du Mali, le Sénégal s'en retire dès août et devient une république présidée par le poète Léopold Sédar Senghor. Après la crise de 1962 avec Mamadou Dia, il gouverne avec un parti dominant, puis quitte volontairement le pouvoir en 1980 au profit d'Abdou Diouf, dont la présidence est marquée par la confédération éphémère de Sénégambie (1982-1989), la crise avec la Mauritanie de 1989 et le début du conflit de Casamance.",
      source: WIKIPEDIA,
      sourceUrl: "https://fr.wikipedia.org/wiki/L%C3%A9opold_S%C3%A9dar_Senghor",
      events: [
        { date: "20 août 1960", title: "Indépendance du Sénégal", description: "Le Sénégal quitte la Fédération du Mali, proclamée indépendante deux mois plus tôt.", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/F%C3%A9d%C3%A9ration_du_Mali" },
        { date: "31 décembre 1980", title: "Départ volontaire de Senghor", description: "Senghor démissionne et laisse la présidence à son Premier ministre Abdou Diouf.", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/Abdou_Diouf" },
        { date: "décembre 1982", title: "Début du conflit de Casamance", description: "Une marche indépendantiste à Ziguinchor, réprimée, ouvre un conflit armé avec le Mouvement des forces démocratiques de Casamance (MFDC).", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/Conflit_en_Casamance" },
      ],
    },
    {
      id: "alternances",
      title: "Alternances démocratiques",
      startYear: 2000,
      endYear: "present",
      summary:
        "En 2000, l'opposant historique Abdoulaye Wade bat Abdou Diouf, première alternance pacifique du pays. Sa candidature à un troisième mandat provoque des manifestations en 2011-2012 ; Macky Sall l'emporte en 2012 et est réélu en 2019. Les poursuites contre l'opposant Ousmane Sonko provoquent ensuite des émeutes meurtrières (2021-2023). Le report de la présidentielle de 2024, annulé par le Conseil constitutionnel, débouche sur l'élection au premier tour de Bassirou Diomaye Faye, puis sur la rupture entre lui et Sonko en mai 2026.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/2024_Senegalese_presidential_election",
      events: [
        { date: "19 mars 2000", title: "Élection d'Abdoulaye Wade", description: "Première alternance au pouvoir depuis l'indépendance, après quarante ans de règne du Parti socialiste.", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/Abdoulaye_Wade" },
        { date: "25 mars 2012", title: "Élection de Macky Sall", description: "Macky Sall bat Abdoulaye Wade au second tour, deuxième alternance.", source: WIKIPEDIA, sourceUrl: "https://fr.wikipedia.org/wiki/Macky_Sall" },
        { date: "24 mars 2024", title: "Élection de Bassirou Diomaye Faye", description: "Pour la première fois, un opposant est élu dès le premier tour, avec 54,3 % des voix.", source: WIKIPEDIA, sourceUrl: "https://en.wikipedia.org/wiki/2024_Senegalese_presidential_election" },
        { date: "22 mai 2026", title: "Limogeage d'Ousmane Sonko", description: "Le président démet son Premier ministre ; Sonko est élu président de l'Assemblée nationale quelques jours plus tard.", source: "France 24", sourceUrl: "https://www.france24.com/fr/afrique/20260523-s%C3%A9n%C3%A9gal-le-premier-ministre-ousmane-sonko-quitte-ses-fonctions" },
      ],
    },
  ],
};
