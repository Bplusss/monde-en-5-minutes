import type { HistoryData } from "@/lib/types";

const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du pays moderne — pas un résumé exhaustif de l'histoire sud-africaine, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "colonisation",
      title: "Peuplement khoisan et bantou, colonisation néerlandaise puis britannique",
      startYear: 1652,
      endYear: 1910,
      summary:
        "Le territoire est peuplé de longue date par les Khoisan puis par des peuples bantous (ancêtres des Zoulous, Xhosas, Sothos, Tswanas). La Compagnie néerlandaise des Indes orientales fonde un comptoir au Cap en 1652 (Jan van Riebeeck), qui devient colonie de peuplement esclavagiste à l'origine de la communauté afrikaner. Le Royaume-Uni annexe le Cap en 1806 ; le Grand Trek (1836) pousse les Boers vers l'intérieur, où ils fondent le Transvaal et l'État libre d'Orange au prix de guerres contre les royaumes africains, dont le royaume zoulou (vaincu en 1879). Les découvertes de diamants (1867) puis d'or (1886, Johannesburg) attisent les tensions avec l'Empire britannique, vainqueur à l'issue de deux guerres anglo-boers (1880-1881, 1899-1902, marquée par des camps de concentration). L'Union sud-africaine, dominion britannique excluant la majorité noire du vote, est proclamée en 1910.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_South_Africa",
      events: [
        {
          date: "1652",
          title: "Fondation du comptoir du Cap",
          description: "Jan van Riebeeck établit pour la Compagnie néerlandaise des Indes orientales un poste de ravitaillement au Cap de Bonne-Espérance, à l'origine de la colonisation européenne du territoire.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Dutch_Cape_Colony",
        },
        {
          date: "1899-1902",
          title: "Seconde guerre anglo-boer",
          description: "Le conflit entre l'Empire britannique et les républiques boers, marqué par l'internement de civils en camps de concentration, s'achève par la défaite boer.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Second_Boer_War",
        },
        {
          date: "31 mai 1910",
          title: "Formation de l'Union sud-africaine",
          description: "Le Royaume-Uni unifie ses colonies et les anciennes républiques boers en un dominion autonome, l'Union sud-africaine, excluant la majorité noire du droit de vote.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Union_of_South_Africa",
        },
      ],
    },
    {
      id: "apartheid",
      title: "L'apartheid : ségrégation raciale institutionnalisée",
      startYear: 1948,
      endYear: 1994,
      summary:
        "Le Parti national, élu en 1948 par le seul électorat blanc, institutionnalise l'apartheid (« séparation ») : classification raciale légale, interdiction des unions interraciales, déplacements forcés vers des zones réservées (Group Areas Act, 1950) et dix « bantoustans » censés priver à terme les Noirs de citoyenneté. Face à la résistance de l'ANC (fondé en 1912) et de son aile armée Umkhonto we Sizwe (1961), la répression se durcit après le massacre de Sharpeville (1960, 69 morts) et l'interdiction de l'ANC. Nelson Mandela est condamné à perpétuité au procès de Rivonia (1964) et y passe vingt-sept ans. Le soulèvement de Soweto (1976), réprimé dans le sang, internationalise la cause anti-apartheid et déclenche boycotts et sanctions croissantes dans les années 1980.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/Apartheid",
      events: [
        {
          date: "1948",
          title: "Victoire électorale du Parti national et instauration de l'apartheid",
          description: "Le Parti national accède au pouvoir et institutionnalise la ségrégation raciale sous le nom d'apartheid.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Apartheid",
        },
        {
          date: "21 mars 1960",
          title: "Massacre de Sharpeville",
          description: "La police tue 69 manifestants pacifiques opposés aux lois sur les laissez-passer imposées à la population noire, provoquant un tournant dans la répression et la contestation.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Sharpeville_massacre",
        },
        {
          date: "1964",
          title: "Procès de Rivonia et condamnation de Nelson Mandela",
          description: "Nelson Mandela et plusieurs dirigeants de l'ANC sont condamnés à la prison à perpétuité pour sabotage et complot contre l'État.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Rivonia_Trial",
        },
        {
          date: "16 juin 1976",
          title: "Soulèvement de Soweto",
          description: "La répression violente d'une manifestation lycéenne contre l'enseignement obligatoire en afrikaans fait plusieurs centaines de morts et relance la mobilisation internationale contre l'apartheid.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Soweto_uprising",
        },
      ],
    },
    {
      id: "transition-democratie",
      title: "La transition négociée et l'avènement de la démocratie",
      startYear: 1990,
      endYear: 1994,
      summary:
        "Sous la pression des sanctions et de la résistance intérieure, le président de Klerk légalise l'ANC le 2 février 1990 et libère Nelson Mandela neuf jours plus tard, après vingt-sept ans de détention. Une négociation constitutionnelle souvent violente aboutit aux premières élections multiraciales (26-29 avril 1994), remportées par l'ANC à 62,6 % des voix. Mandela devient le 10 mai 1994 le premier président noir du pays, à la tête d'un gouvernement d'union nationale ; de Klerk et lui reçoivent conjointement le prix Nobel de la paix en 1993.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_South_Africa_(1994%E2%80%93present)",
      events: [
        {
          date: "11 février 1990",
          title: "Libération de Nelson Mandela",
          description: "Nelson Mandela est libéré après vingt-sept ans d'emprisonnement, quelques jours après la légalisation de l'ANC par le président de Klerk.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nelson_Mandela",
        },
        {
          date: "26-29 avril 1994",
          title: "Premières élections démocratiques multiraciales",
          description: "L'ANC remporte les premières élections générales ouvertes à tous les Sud-Africains, quelle que soit leur origine raciale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/1994_South_African_general_election",
        },
        {
          date: "10 mai 1994",
          title: "Investiture de Nelson Mandela",
          description: "Nelson Mandela devient le premier président noir et démocratiquement élu d'Afrique du Sud, mettant fin à l'apartheid.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nelson_Mandela",
        },
      ],
    },
    {
      id: "afrique-du-sud-post-apartheid",
      title: "La « nation arc-en-ciel » face à ses défis persistants",
      startYear: 1994,
      endYear: "present",
      summary:
        "La Constitution de 1996, l'une des plus progressistes au monde, s'accompagne d'une Commission Vérité et Réconciliation présidée par Desmond Tutu. Les politiques de discrimination positive (Black Economic Empowerment) ne résorbent ni le chômage de masse ni les inégalités héritées de l'apartheid. La présidence de Jacob Zuma (2009-2018) est ternie par les scandales de corruption dits de « State capture », qui fragilisent des entreprises publiques comme Eskom, à l'origine des coupures d'électricité récurrentes des années 2020. En mai 2024, l'ANC perd pour la première fois sa majorité absolue et forme un gouvernement d'union nationale avec l'Alliance démocratique. Le pays organise la Coupe du monde de football en 2010, une première africaine.",
      source: WIKIPEDIA,
      sourceUrl: "https://en.wikipedia.org/wiki/History_of_South_Africa_(1994%E2%80%93present)",
      events: [
        {
          date: "1996",
          title: "Adoption de la Constitution définitive",
          description: "L'Afrique du Sud se dote d'une Constitution comptant parmi les plus progressistes au monde en matière de droits fondamentaux.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_South_Africa",
        },
        {
          date: "2009-2018",
          title: "Présidence de Jacob Zuma et scandales de « State capture »",
          description: "Le mandat de Jacob Zuma est marqué par de vastes scandales de corruption et de captation des institutions publiques par des intérêts privés, jusqu'à sa démission forcée en 2018.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Jacob_Zuma",
        },
        {
          date: "2010",
          title: "Coupe du monde de football",
          description: "L'Afrique du Sud devient le premier pays africain à organiser la Coupe du monde de la FIFA.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup",
        },
        {
          date: "29 mai 2024",
          title: "L'ANC perd sa majorité absolue",
          description: "Pour la première fois depuis 1994, l'ANC obtient moins de 50 % des voix et forme un Gouvernement d'union nationale avec plusieurs partis d'opposition, dont l'Alliance démocratique.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/2024_South_African_general_election",
        },
      ],
    },
  ],
};
