import type { EnvironmentData } from "@/lib/types";

export const environment: EnvironmentData = {
  renewableShare: {
    value: 4.0,
    unit: "%",
    year: 2023,
    source: "Agence internationale pour les énergies renouvelables (IRENA)",
    sourceUrl: "https://www.irena.org/-/media/Files/IRENA/Agency/Statistics/Statistical_Profiles/Middle-East/Iran-Islamic-Republic-of_Middle-East_RE_SP.pdf",
    note: "Essentiellement de l'hydroélectricité ; le reste de la production est dominé à plus de 90 % par le gaz naturel, et le solaire/éolien restent embryonnaires malgré un fort potentiel, freiné par les sanctions.",
  },
  co2PerCapita: {
    value: 9.0,
    unit: "t",
    year: 2023,
    source: "Global Carbon Atlas",
    sourceUrl: "https://globalcarbonatlas.org/emissions/carbon-emissions/",
    note: "Largement supérieures à la moyenne mondiale (environ 4,7 t), conséquence de carburants et d'électricité massivement subventionnés.",
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
        note: "Unique réacteur en service, à la centrale de Bouchehr (aide russe, 2011), première centrale nucléaire du Moyen-Orient. Deux réacteurs supplémentaires sont en construction sur le même site.",
      },
    },
    {
      label: "Stress hydrique",
      value: {
        value: "extrêmement élevé",
        year: 2023,
        source: "World Resources Institute (Aqueduct)",
        sourceUrl: "https://www.wri.org/aqueduct",
        note: "Surexploitation chronique des nappes phréatiques ; le lac Ormia a perdu plus de 80 % de sa superficie depuis les années 1990.",
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
    "Grand pays pétrolier et gazier, l'Iran affiche l'une des empreintes carbone par habitant les plus élevées de la région, entretenue par des subventions massives aux carburants. La crise de l'eau est le défi le plus pressant (nappes surexploitées, lac Ormia en quasi-disparition), et le pays reste exposé à une pollution urbaine sévère et à des séismes dévastateurs récurrents (Bam, 2003, plus de 26 000 morts).",
};
