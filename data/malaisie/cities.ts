import type { City } from "@/lib/types";

export const cities: City[] = [
  { name: "Kuala Lumpur", lat: 3.139, lon: 101.6869, isCapital: true, population: { value: 1_982_112, year: 2020, source: "Department of Statistics Malaysia (recensement 2020)", sourceUrl: "https://www.dosm.gov.my/portal-main/release-content/key-findings-population-and-housing-census-of-malaysia-2020", note: "Territoire fédéral ; l'agglomération de la vallée de Klang dépasse 8 millions d'habitants. Les ministères sont installés à Putrajaya." } },
  { name: "Putrajaya", lat: 2.9264, lon: 101.6964 },
  { name: "George Town", lat: 5.4141, lon: 100.3288 },
  { name: "Johor Bahru", lat: 1.4927, lon: 103.7414 },
  { name: "Ipoh", lat: 4.5975, lon: 101.0901 },
  { name: "Kuching", lat: 1.5535, lon: 110.3593 },
  { name: "Kota Kinabalu", lat: 5.9804, lon: 116.0735 },
];
