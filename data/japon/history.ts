import type { HistoryData } from "@/lib/types";

const BRITANNICA = "Encyclopaedia Britannica";
const BRITANNICA_URL = "https://www.britannica.com/place/Japan";
const WIKIPEDIA = "Wikipedia";

export const history: HistoryData = {
  intro:
    "Quelques repères pour situer les grandes étapes de construction du Japon moderne — pas un résumé exhaustif de plus de deux millénaires d'histoire japonaise, déjà largement documentée par ailleurs.",
  periods: [
    {
      id: "japon-ancien-feodal",
      title: "Japon ancien, cour impériale et shogunats féodaux",
      startYear: -14000,
      endYear: 1868,
      summary:
        "Après les cultures Jōmon puis Yayoi, un État unifié émerge sous le clan Yamato ; la cour impériale de Nara puis de Heian (VIIIᵉ-XIIᵉ siècle) développe une civilisation raffinée fortement influencée par la Chine, avant que le pouvoir réel ne bascule vers des shoguns militaires. Trois shogunats se succèdent : Kamakura (1185-1333), Muromachi (1338-1573) — marqué par une longue période de guerres civiles (Sengoku) — et enfin le shogunat Tokugawa (1603-1868), qui impose deux siècles et demi de paix intérieure sous un régime d'isolement quasi total (sakoku), le commerce extérieur étant réduit à un comptoir néerlandais unique sur l'îlot de Dejima, près de Nagasaki. Durant cette période, l'empereur, retiré à Kyoto, ne conserve qu'une autorité religieuse et symbolique.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [],
    },
    {
      id: "ere-meiji",
      title: "L'ère Meiji : restauration impériale et modernisation accélérée",
      startYear: 1868,
      endYear: 1912,
      summary:
        "L'arrivée de l'escadre du commodore américain Matthew Perry en 1853 force l'ouverture du Japon et précipite la chute du shogunat. La restauration Meiji de 1868 rend formellement le pouvoir à l'empereur et lance une modernisation tous azimuts — industrialisation, armée moderne, système scolaire, adoption d'une Constitution en 1889 — qui fait du Japon la première puissance non occidentale de l'ère industrielle. Ce redressement s'accompagne d'une expansion coloniale précoce : victoire sur la Chine (1894-1895), sur la Russie (1904-1905) — une première pour une puissance asiatique face à une puissance européenne — puis annexion de la Corée en 1910.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "3 janvier 1868",
          title: "Restauration Meiji",
          description: "Un coup d'État de jeunes samouraïs réformateurs met fin au shogunat Tokugawa et restaure formellement le pouvoir de l'empereur, ouvrant l'ère de modernisation Meiji.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Meiji_Restoration",
        },
        {
          date: "1904-1905",
          title: "Guerre russo-japonaise",
          description: "La victoire du Japon sur l'Empire russe, scellée par le traité de Portsmouth, marque la première défaite d'une grande puissance européenne face à un État asiatique à l'ère moderne.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Russo-Japanese_War",
        },
        {
          date: "22 août 1910",
          title: "Annexion de la Corée",
          description: "Le Japon annexe formellement la Corée, qui reste une colonie japonaise jusqu'en 1945.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Korea_under_Japanese_rule",
        },
      ],
    },
    {
      id: "expansion-imperiale-guerre",
      title: "Militarisme, expansion impériale et Seconde Guerre mondiale",
      startYear: 1912,
      endYear: 1945,
      summary:
        "Après une brève ouverture démocratique durant l'ère Taishō (1912-1926), le pouvoir militaire prend une place croissante dans la vie politique japonaise à partir des années 1930. Le Japon envahit la Mandchourie en 1931 puis engage en 1937 une guerre totale contre la Chine, marquée par de nombreuses exactions contre des populations civiles, dont le massacre de Nankin (décembre 1937-mars 1938), dont le bilan — très débattu, y compris au Japon où certains milieux nationalistes le minimisent — est estimé par le tribunal militaire international pour l'Extrême-Orient à plus de 200 000 morts, la plupart des historiens retenant aujourd'hui une fourchette de 100 000 à 200 000 victimes. L'attaque surprise de Pearl Harbor, le 7 décembre 1941, entraîne l'entrée en guerre des États-Unis dans le Pacifique. Le conflit s'achève par les bombardements atomiques d'Hiroshima (6 août 1945) et de Nagasaki (9 août 1945) — les deux seuls emplois d'armes nucléaires dans un conflit armé de toute l'histoire —, suivis de l'annonce par l'empereur Hirohito de la reddition du Japon le 15 août puis de sa signature formelle le 2 septembre 1945.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "18 septembre 1931",
          title: "Incident de Moukden et invasion de la Mandchourie",
          description: "Un attentat organisé par l'armée japonaise sert de prétexte à l'invasion de la Mandchourie, où le Japon installe l'État fantoche du Mandchoukouo.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Mukden_incident",
        },
        {
          date: "7 juillet 1937",
          title: "Début de la seconde guerre sino-japonaise",
          description: "L'incident du pont Marco Polo, près de Pékin, déclenche une guerre totale entre le Japon et la Chine, marquée par de nombreuses exactions contre les populations civiles, dont le massacre de Nankin (décembre 1937-mars 1938).",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Nanjing_Massacre",
        },
        {
          date: "7-8 décembre 1941",
          title: "Attaque de Pearl Harbor",
          description: "L'aviation japonaise frappe par surprise la flotte américaine du Pacifique à Pearl Harbor, provoquant l'entrée en guerre des États-Unis contre le Japon.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor",
        },
        {
          date: "6 et 9 août 1945",
          title: "Bombardements atomiques d'Hiroshima et de Nagasaki",
          description:
            "Les États-Unis larguent une bombe atomique sur Hiroshima le 6 août puis sur Nagasaki le 9 août 1945 — les deux seuls emplois d'armes nucléaires dans un conflit armé à ce jour. Les estimations de décès varient selon les sources et la période considérée : de l'ordre de 90 000 à 166 000 morts à Hiroshima et de 60 000 à 80 000 à Nagasaki d'ici la fin de l'année 1945, en comptant les décès différés dus aux radiations.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki",
        },
        {
          date: "15 août et 2 septembre 1945",
          title: "Reddition du Japon",
          description: "L'empereur Hirohito annonce par radio l'acceptation de la déclaration de Potsdam le 15 août ; l'acte de capitulation est signé à bord de l'USS Missouri le 2 septembre 1945, mettant fin à la Seconde Guerre mondiale.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Surrender_of_Japan",
        },
      ],
    },
    {
      id: "occupation-miracle-economique",
      title: "Occupation alliée, nouvelle Constitution et miracle économique",
      startYear: 1945,
      endYear: 1989,
      summary:
        "De 1945 à 1952, le Japon vaincu est administré par les forces d'occupation alliées sous l'autorité du général américain Douglas MacArthur, qui supervise une refonte complète des institutions : démilitarisation, réforme agraire, et adoption d'une nouvelle Constitution pacifiste, promulguée le 3 novembre 1946 et entrée en vigueur le 3 mai 1947, qui fait de l'empereur un simple symbole sans pouvoir politique et renonce, en son article 9, au droit de belligérance de l'État. Le traité de San Francisco de 1951 met fin à l'occupation et restaure la pleine souveraineté japonaise à partir de 1952. S'ensuit un redressement économique fulgurant — le « miracle économique » —, porté par l'industrie lourde puis l'électronique et l'automobile, qui fait du Japon la deuxième économie mondiale dès les années 1960-1970, symbolisé par les Jeux olympiques de Tokyo et l'ouverture du premier Shinkansen en 1964. Cette croissance culmine dans la bulle spéculative immobilière et boursière de la fin des années 1980.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "3 mai 1947",
          title: "Entrée en vigueur de la Constitution pacifiste",
          description: "La nouvelle Constitution, rédigée sous supervision américaine, fait de l'empereur un symbole sans pouvoir politique et inscrit à l'article 9 le renoncement à la guerre comme droit souverain de la nation.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_Japan",
        },
        {
          date: "1964",
          title: "Jeux olympiques de Tokyo et premier Shinkansen",
          description: "Les Jeux olympiques d'été de Tokyo, premiers organisés en Asie, coïncident avec l'inauguration de la ligne Tōkaidō Shinkansen, symboles de la spectaculaire reconstruction économique du pays.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Shinkansen",
        },
      ],
    },
    {
      id: "japon-contemporain",
      title: "Le Japon contemporain : décennies perdues, catastrophes et vieillissement",
      startYear: 1989,
      endYear: "present",
      summary:
        "L'éclatement de la bulle spéculative en 1991 ouvre une longue période de croissance atone et de déflation, souvent qualifiée de « décennies perdues ». Le pays est frappé par plusieurs catastrophes majeures : le séisme de Kobe en janvier 1995, qui fait plus de 6 000 morts, puis, le 11 mars 2011, le séisme et le tsunami de Tōhoku, qui font environ 19 750 morts et plus de 2 500 disparus selon les autorités japonaises et provoquent l'accident nucléaire de la centrale de Fukushima Daiichi — le plus grave depuis Tchernobyl, qui entraîne l'évacuation de centaines de milliers de personnes et l'arrêt temporaire de la quasi-totalité du parc nucléaire national. Sur le plan politique, le pays connaît depuis 2012 une plus grande stabilité gouvernementale, tandis que l'empereur Akihito, premier à abdiquer depuis plus de deux siècles, cède le trône à son fils Naruhito le 1er mai 2019, ouvrant l'ère Reiwa. En octobre 2025, Sanae Takaichi devient la première femme Première ministre du Japon.",
      source: BRITANNICA,
      sourceUrl: BRITANNICA_URL,
      events: [
        {
          date: "17 janvier 1995",
          title: "Séisme de Kobe",
          description: "Le grand séisme de Hanshin-Awaji fait plus de 6 000 morts dans la région de Kobe et révèle les failles des normes parasismiques de l'époque.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Great_Hanshin_earthquake",
        },
        {
          date: "11 mars 2011",
          title: "Séisme, tsunami de Tōhoku et accident nucléaire de Fukushima",
          description:
            "Un séisme de magnitude 9,0-9,1, l'un des plus puissants jamais enregistrés, déclenche un tsunami dévastateur sur la côte nord-est ; le bilan officiel s'établit à environ 19 750 morts et plus de 2 500 disparus. Le tsunami provoque par ailleurs l'accident nucléaire de la centrale de Fukushima Daiichi, distinct par son bilan propre : selon l'agence japonaise de la reconstruction, 2 313 décès liés à l'évacuation (stress, rupture de soins) ont été recensés parmi les évacués de la préfecture, tandis que le Comité scientifique des Nations unies (UNSCEAR) n'a identifié aucun effet sanitaire directement attribuable aux radiations parmi la population, en dehors d'un décès de travailleur reconnu en 2018 après un cancer du poumon.",
          source: "UNSCEAR / World Nuclear Association",
          sourceUrl: "https://world-nuclear.org/information-library/safety-and-security/safety-of-plants/fukushima-daiichi-accident",
        },
        {
          date: "1 mai 2019",
          title: "Abdication d'Akihito et intronisation de Naruhito",
          description: "L'empereur Akihito abdique le 30 avril 2019, premier empereur japonais à le faire depuis plus de deux siècles ; son fils Naruhito lui succède le lendemain, inaugurant l'ère Reiwa.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Naruhito",
        },
        {
          date: "21 octobre 2025",
          title: "Sanae Takaichi, première femme Première ministre",
          description: "Sanae Takaichi devient la première femme à diriger le gouvernement japonais, à l'issue de son élection à la présidence du Parti libéral-démocrate.",
          source: WIKIPEDIA,
          sourceUrl: "https://en.wikipedia.org/wiki/Sanae_Takaichi",
        },
      ],
    },
  ],
};
