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
        "Le territoire de l'actuelle Afrique du Sud est peuplé de longue date par des populations khoisan (San chasseurs-cueilleurs et Khoïkhoï pasteurs) puis, à partir d'une migration progressive depuis le nord entamée il y a environ deux mille ans, par des peuples de langues bantoues (ancêtres des Zoulous, Xhosas, Sothos et Tswanas actuels). La Compagnie néerlandaise des Indes orientales établit en 1652 un comptoir de ravitaillement au Cap, sous la direction de Jan van Riebeeck, qui se développe en colonie de peuplement (les colons néerlandais, plus tard rejoints par des huguenots français et des Allemands, donnent naissance à la communauté afrikaner et à sa langue, l'afrikaans) reposant largement sur une économie esclavagiste important une main-d'œuvre d'Afrique de l'Est, de Madagascar et d'Asie du Sud-Est. Le Royaume-Uni s'empare de la colonie du Cap en 1795 puis définitivement en 1806, provoquant à partir de 1836 le Grand Trek, migration de colons boers (fermiers afrikaners) fuyant l'autorité britannique et l'abolition de l'esclavage (1834) vers l'intérieur des terres, où ils fondent les républiques boers du Transvaal et de l'État libre d'Orange, au prix de guerres et de spoliations territoriales contre les royaumes africains déjà présents, notamment le royaume zoulou (vaincu par les Britanniques en 1879). La découverte de diamants à Kimberley (1867) puis d'or sur le Witwatersrand (1886, à l'origine de Johannesburg) attise les tensions entre l'Empire britannique et les républiques boers, qui dégénèrent en deux guerres anglo-boers (1880-1881 et 1899-1902) ; la seconde, particulièrement meurtrière, voit les Britanniques recourir à une politique de la terre brûlée et à l'internement de civils boers (et de Noirs africains) dans des camps de concentration où des dizaines de milliers de personnes meurent de maladie et de malnutrition. La victoire britannique aboutit en 1910 à l'Union sud-africaine, dominion autonome de l'Empire britannique unifiant les colonies du Cap et du Natal avec les anciennes républiques boers vaincues — un compromis politique entre Britanniques et Afrikaners qui exclut d'emblée la majorité noire du droit de vote.",
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
        "Le Parti national, à dominante afrikaner, remporte les élections de 1948 (réservées à l'électorat blanc) et institutionnalise sous le nom d'apartheid (« séparation » en afrikaans) un système de ségrégation raciale déjà largement présent mais désormais érigé en doctrine d'État systématique : classification légale de toute la population en groupes raciaux (Population Registration Act, 1950), interdiction des mariages et relations sexuelles interraciales, ségrégation résidentielle stricte imposant le déplacement forcé de millions de Sud-Africains noirs, métis et indiens vers des zones réservées (Group Areas Act, 1950), création de dix « bantoustans » présentés comme des patries nationales censées priver à terme les Noirs de la citoyenneté sud-africaine, et exclusion systématique de la population non blanche de toute représentation politique nationale. L'apartheid suscite une résistance croissante, portée notamment par le Congrès national africain (ANC, fondé en 1912) et son aile militaire clandestine Umkhonto we Sizwe (« la lance de la nation », créée en 1961) ; la répression étatique se durcit après le massacre de Sharpeville (21 mars 1960, 69 manifestants tués par la police lors d'une manifestation contre les lois sur les laissez-passer) et l'interdiction de l'ANC et du Congrès panafricaniste qui s'ensuit. Nelson Mandela, dirigeant de l'ANC, est condamné à la prison à perpétuité à l'issue du procès de Rivonia en 1964 et y demeure vingt-sept ans, devenant le symbole international de la lutte anti-apartheid. Le soulèvement de Soweto (16 juin 1976), déclenché par l'imposition de l'afrikaans comme langue d'enseignement obligatoire et réprimé dans le sang (plusieurs centaines de morts, essentiellement des lycéens), marque un tournant qui internationalise durablement la cause anti-apartheid, alimentant boycotts sportifs et culturels, sanctions économiques croissantes et isolement diplomatique du régime sud-africain à partir des années 1980.",
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
        "Sous la pression conjointe des sanctions internationales, de la résistance intérieure et d'une économie exsangue, le président F. W. de Klerk annonce le 2 février 1990 la légalisation de l'ANC et des autres mouvements de libération, ainsi que la libération prochaine de Nelson Mandela, effective le 11 février 1990 après vingt-sept ans de détention. S'ouvre alors une négociation constitutionnelle complexe et souvent violente (plusieurs milliers de morts dans des violences intercommunautaires, notamment entre partisans de l'ANC et de l'Inkatha Freedom Party zoulou, en partie attisées par des éléments de l'État sécuritaire de l'apartheid) entre le gouvernement sortant et les mouvements anti-apartheid, aboutissant à l'organisation des premières élections générales multiraciales du pays, les 26-29 avril 1994. L'ANC les remporte avec 62,6 % des voix et Nelson Mandela devient le 10 mai 1994 le premier président noir et démocratiquement élu d'Afrique du Sud, à la tête d'un gouvernement d'union nationale incluant notamment F. W. de Klerk comme vice-président. De Klerk et Mandela reçoivent conjointement le prix Nobel de la paix en 1993 pour ce processus de transition négociée, salué comme un modèle de réconciliation nationale malgré les profondes inégalités structurelles laissées en héritage par près d'un demi-siècle d'apartheid (et plusieurs siècles de colonisation).",
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
        "La nouvelle Constitution démocratique, adoptée en 1996 et l'une des plus progressistes au monde (elle interdit notamment toute discrimination fondée sur l'orientation sexuelle, une première mondiale), s'accompagne de la Commission Vérité et Réconciliation, présidée par l'archevêque Desmond Tutu, chargée de faire la lumière sur les crimes de l'apartheid en échange d'amnisties conditionnelles. Sur le plan économique, le gouvernement post-apartheid engage des politiques de discrimination positive (Black Economic Empowerment) destinées à corriger les inégalités héritées de la ségrégation, sans parvenir à résorber un chômage de masse ni les profondes inégalités de revenu qui recoupent toujours largement la géographie raciale du pays. La présidence de Jacob Zuma (2009-2018) est ternie par de vastes scandales de corruption et de captation de l'État par des intérêts privés (« State capture », notamment liée à la famille Gupta), qui contribuent à la dégradation des finances publiques et des entreprises d'État, en premier lieu le producteur d'électricité Eskom, à l'origine de la crise chronique de délestage qui frappe le pays dans les années 2020. Après trente ans de domination électorale sans partage, l'ANC perd sa majorité absolue lors des élections générales de mai 2024 et doit former un Gouvernement d'union nationale avec plusieurs partis d'opposition, dont l'Alliance démocratique — un basculement politique majeur qui ouvre une période institutionnelle inédite depuis la fin de l'apartheid, sur fond de défis persistants (criminalité, corruption, inégalités) mais aussi de vitrines internationales réussies, comme l'organisation de la première Coupe du monde de football jamais tenue sur le continent africain, en 2010.",
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
