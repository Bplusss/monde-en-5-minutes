import type { River } from "@/lib/types";

export const rivers: River[] = [
  {
    name: "Waikato",
    lengthKm: {
      value: 425,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Plus long fleuve du pays ; une chaîne de huit barrages hydroélectriques jalonne son cours, et il revêt une grande importance spirituelle pour la tribu Waikato-Tainui.",
    },
    source_location: "Pentes du mont Ruapehu, via le lac Taupo",
    mouth: "Mer de Tasman, à Port Waikato",
  },
  {
    name: "Clutha",
    lengthKm: {
      value: 338,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Fleuve au plus fort débit du pays, qui traverse l'Otago ; les barrages de Clyde et de Roxburgh y produisent une part importante de l'électricité de l'île du Sud.",
    },
    source_location: "Lac Wanaka (Otago)",
    mouth: "Océan Pacifique, au sud de Balclutha",
  },
  {
    name: "Whanganui",
    lengthKm: {
      value: 290,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Premier fleuve au monde reconnu comme personne juridique, en 2017 ; navigable sur une grande partie de son cours, il est aussi un itinéraire prisé de canoë.",
    },
    source_location: "Mont Tongariro (plateau central)",
    mouth: "Mer de Tasman, à Whanganui",
  },
  {
    name: "Waitaki",
    lengthKm: {
      value: 209,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Fleuve tressé caractéristique de l'île du Sud, qui marque la limite entre Canterbury et Otago ; son bassin, avec les lacs Tekapo, Pukaki et Ohau, fournit une grande part de l'hydroélectricité nationale.",
    },
    source_location: "Lacs glaciaires du bassin de Mackenzie (Alpes du Sud)",
    mouth: "Océan Pacifique, au nord d'Oamaru",
  },
  {
    name: "Waimakariri",
    lengthKm: {
      value: 151,
      unit: "km",
      source: "Wikipedia (géographie physique)",
      note: "Fleuve tressé descendu des Alpes du Sud qui longe le nord de Christchurch, dont il menaçait autrefois la ville de ses crues.",
    },
    source_location: "Alpes du Sud, près du col d'Arthur",
    mouth: "Océan Pacifique, au nord de Christchurch",
  },
];
