import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 4.0,
    unit: "%",
    year: 2023,
    source: "Agence internationale pour les énergies renouvelables (IRENA)",
    sourceUrl: "https://www.irena.org/-/media/Files/IRENA/Agency/Statistics/Statistical_Profiles/Middle-East/Iran-Islamic-Republic-of_Middle-East_RE_SP.pdf",
    note: "Part des renouvelables (essentiellement l'hydroélectricité, environ 3 %) dans la production totale d'électricité, dominée à plus de 90 % par le gaz naturel, dont l'Iran regorge ; le solaire et l'éolien restent embryonnaires (environ 1 GW et 350 MW installés en 2024) malgré un fort potentiel, notamment solaire, freiné par les sanctions et le manque d'investissements étrangers.",
  },
  co2PerCapita: {
    value: 9.0,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Parmi les plus élevées de la région et largement supérieures à la moyenne mondiale (environ 4,7 t), conséquence directe de carburants et d'électricité massivement subventionnés qui découragent toute sobriété énergétique — l'Iran affiche l'une des intensités énergétiques les plus fortes au monde.",
  },
  indicators: [
    {
      label: "Part du nucléaire dans l'électricité",
      value: {
        value: 1.7,
        unit: "%",
        year: 2023,
        source: "World Nuclear Association",
        sourceUrl: "https://world-nuclear.org/information-library/country-profiles/countries-g-n/iran",
        note: "Unique réacteur en service, à la centrale de Bouchehr (construite avec l'aide russe, mise en service en 2011) — première centrale nucléaire du Moyen-Orient. Deux réacteurs supplémentaires sont en construction sur le même site (Bouchehr 2 et 3), qui porteraient à terme la part du nucléaire à 8-10 % de l'électricité du pays selon l'Organisation iranienne de l'énergie atomique.",
      },
    },
    {
      label: "Stress hydrique",
      value: {
        value: "extrêmement élevé",
        year: 2023,
        source: "World Resources Institute (Aqueduct)",
        sourceUrl: "https://www.wri.org/aqueduct",
        note: "L'Iran figure parmi les pays du monde soumis au plus fort stress hydrique, avec une surexploitation chronique des nappes phréatiques ; le lac Ormia, autrefois l'un des plus grands lacs salés du monde, a perdu plus de 80 % de sa superficie depuis les années 1990 sous l'effet du détournement de ses affluents pour l'irrigation et de sécheresses répétées.",
      },
    },
  ],
  risks: [
    "Stress hydrique sévère et assèchement de lacs (lac Ormia, marais du Khouzestan)",
    "Pollution atmosphérique majeure à Téhéran et dans les grandes villes industrielles",
    "Désertification et affaissement des sols dans le bassin du plateau central",
    "Séismes majeurs (zone de collision des plaques arabique et eurasiatique)",
    "Vagues de chaleur extrêmes dans le sud et le Khouzestan",
  ],
  risksSource: { source: "Banque mondiale / Wikipedia (Environmental issues in Iran)", sourceUrl: "https://en.wikipedia.org/wiki/Environmental_issues_in_Iran" },
  summary:
    "Grand pays pétrolier et gazier, l'Iran affiche l'une des empreintes carbone par habitant les plus élevées de la région, entretenue par des décennies de subventions massives aux carburants et à l'électricité qui découragent toute transition énergétique, alors même que le pays dispose d'un potentiel solaire considérable resté largement sous-exploité faute d'investissements, freinés par les sanctions internationales. La crise de l'eau constitue le défi environnemental le plus pressant : surexploitation des nappes souterraines pour une agriculture très gourmande en eau, quasi-disparition du lac Ormia et affaissements de terrain préoccupants dans la plaine de Téhéran, où le sol s'enfonce localement de plusieurs dizaines de centimètres par an. Téhéran, encaissée entre les montagnes de l'Alborz, connaît par ailleurs des pics de pollution atmosphérique parmi les plus sévères au monde en hiver, aggravés par la combustion de carburants de mauvaise qualité, tandis que le pays, situé sur une zone de collision tectonique majeure, reste exposé à des séismes dévastateurs récurrents (le séisme de Bam en 2003 avait fait plus de 26 000 morts).",
};
