import type { Country } from "@/lib/types";
import { applyMetricOverrides, fetchMetricOverrides } from "@/lib/metrics-overlay";
import { france } from "./france";
import { italy } from "./italy";
import { germany } from "./germany";
import { spain } from "./spain";
import { portugal } from "./portugal";
import { austria } from "./autriche";
import { netherlands } from "./pays-bas";
import { unitedKingdom } from "./royaume-uni";
import { belgium } from "./belgique";
import { norway } from "./norvege";
import { poland } from "./pologne";
import { switzerland } from "./suisse";
import { sweden } from "./suede";
import { greece } from "./grece";
import { denmark } from "./danemark";
import { albania } from "./albanie";
import { lithuania } from "./lituanie";
import { bulgaria } from "./bulgarie";
import { croatia } from "./croatie";
import { estonia } from "./estonie";
import { hungary } from "./hongrie";
import { czechia } from "./tchequie";
import { ireland } from "./irlande";
import { finland } from "./finlande";
import { andorra } from "./andorre";
import { belarus } from "./bielorussie";
import { vaticanCity } from "./cite-du-vatican";
import { luxembourg } from "./luxembourg";
import { iceland } from "./islande";
import { northMacedonia } from "./macedoine-du-nord";
import { monaco } from "./monaco";
import { bosniaAndHerzegovina } from "./bosnie-herzegovine";
import { malta } from "./malte";
import { moldova } from "./moldavie";
import { ukraine } from "./ukraine";
import { latvia } from "./lettonie";
import { romania } from "./roumanie";
import { slovakia } from "./slovaquie";
import { liechtenstein } from "./liechtenstein";
import { serbia } from "./serbie";
import { slovenia } from "./slovenie";
import { saintMarin } from "./saint-marin";
import { montenegro } from "./montenegro";
import { etatsUnis } from "./etats-unis";
import { canada } from "./canada";
import { japan } from "./japon";
import { togo } from "./togo";
import { brazil } from "./bresil";
import { australia } from "./australie";
import { mexico } from "./mexique";
import { india } from "./inde";
import { nigeria } from "./nigeria";
import { argentina } from "./argentine";
import { china } from "./chine";
import { iran } from "./iran";
import { southKorea } from "./coree-du-sud";

/** Full `Country` records — the only ones that can be rendered as a country page or in a comparison. */
export const FULL_COUNTRIES: Record<string, Country> = {
  [france.slug]: france,
  [italy.slug]: italy,
  [germany.slug]: germany,
  [spain.slug]: spain,
  [portugal.slug]: portugal,
  [austria.slug]: austria,
  [netherlands.slug]: netherlands,
  [unitedKingdom.slug]: unitedKingdom,
  [belgium.slug]: belgium,
  [norway.slug]: norway,
  [poland.slug]: poland,
  [switzerland.slug]: switzerland,
  [sweden.slug]: sweden,
  [greece.slug]: greece,
  [denmark.slug]: denmark,
  [albania.slug]: albania,
  [lithuania.slug]: lithuania,
  [bulgaria.slug]: bulgaria,
  [croatia.slug]: croatia,
  [estonia.slug]: estonia,
  [hungary.slug]: hungary,
  [czechia.slug]: czechia,
  [ireland.slug]: ireland,
  [finland.slug]: finland,
  [andorra.slug]: andorra,
  [belarus.slug]: belarus,
  [vaticanCity.slug]: vaticanCity,
  [luxembourg.slug]: luxembourg,
  [iceland.slug]: iceland,
  [northMacedonia.slug]: northMacedonia,
  [monaco.slug]: monaco,
  [bosniaAndHerzegovina.slug]: bosniaAndHerzegovina,
  [malta.slug]: malta,
  [moldova.slug]: moldova,
  [ukraine.slug]: ukraine,
  [latvia.slug]: latvia,
  [romania.slug]: romania,
  [slovakia.slug]: slovakia,
  [liechtenstein.slug]: liechtenstein,
  [serbia.slug]: serbia,
  [slovenia.slug]: slovenia,
  [saintMarin.slug]: saintMarin,
  [montenegro.slug]: montenegro,
  [etatsUnis.slug]: etatsUnis,
  [canada.slug]: canada,
  [japan.slug]: japan,
  [togo.slug]: togo,
  [brazil.slug]: brazil,
  [australia.slug]: australia,
  [mexico.slug]: mexico,
  [india.slug]: india,
  [nigeria.slug]: nigeria,
  [argentina.slug]: argentina,
  [china.slug]: china,
  [iran.slug]: iran,
  [southKorea.slug]: southKorea,
};

export function getFullCountry(slug: string): Country | undefined {
  return FULL_COUNTRIES[slug];
}

/** `getFullCountry` plus any weekly-refreshed metrics stored in Supabase — falls back to static data alone if unavailable. */
export async function getFullCountryWithLiveData(slug: string): Promise<Country | undefined> {
  const country = FULL_COUNTRIES[slug];
  if (!country) return undefined;
  const overrides = await fetchMetricOverrides(slug);
  return applyMetricOverrides(country, overrides);
}
