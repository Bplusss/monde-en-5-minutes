import type { LanguagesData } from "@/lib/types";

const NSI = "Institut national de statistique de Bulgarie (NSI), recensement 2021";
const NSI_URL = "https://www.nsi.bg/sites/default/files/files/pressreleases/Census2021-ethnos_en.pdf";

export const languages: LanguagesData = {
  entries: [
    {
      name: "Bulgare",
      kind: "officielle",
      sharePercent: { value: 85.3, unit: "%", year: 2021, source: NSI, sourceUrl: NSI_URL, note: "Part de la population ayant déclaré le bulgare comme langue maternelle." },
      note: "Seule langue officielle inscrite dans la Constitution ; écrite en alphabet cyrillique.",
    },
    {
      name: "Turc",
      kind: "parlée",
      sharePercent: { value: 8.7, unit: "%", year: 2021, source: NSI, sourceUrl: NSI_URL },
      note: "Langue maternelle de la minorité turque, concentrée dans le nord-est et les Rhodopes.",
    },
    {
      name: "Romani",
      kind: "parlée",
      sharePercent: { value: 3.9, unit: "%", year: 2021, source: NSI, sourceUrl: NSI_URL },
      note: "Langue maternelle d'une partie de la communauté rom.",
    },
  ],
  summary:
    "Le bulgare, langue slave écrite en alphabet cyrillique, est la seule langue officielle du pays. Les minorités turque et rom, présentes de longue date, conservent chacune leur langue maternelle dans la vie familiale et communautaire, sans statut officiel au niveau national.",
};
