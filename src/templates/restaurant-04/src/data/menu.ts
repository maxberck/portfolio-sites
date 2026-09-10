import type { KuroMenuSection } from "../../types";

export const kuroMenu: KuroMenuSection[] = [
  {
    title: "Omakase",
    intro: "Une suite courte laissée au rythme de la cuisine, entre cru, vapeur, braise et riz.",
    items: [
      {
        name: "Omakase Kuro",
        description: "Sept services selon les arrivages du jour, riz vinaigré, bouillons et condiments maison.",
        price: "89 €",
      },
      {
        name: "Omakase végétal",
        description: "Six services autour des légumes, algues, tofu, fermentation et riz donabe.",
        price: "72 €",
        note: "Végétal",
      },
    ],
  },
  {
    title: "Petites assiettes",
    items: [
      {
        name: "Chawanmushi",
        description: "Flan salé vapeur, dashi, shiitake, cébette et huile de sésame grillé.",
        price: "14 €",
      },
      {
        name: "Nasu dengaku",
        description: "Aubergine rôtie, miso rouge, sésame et gingembre frais.",
        price: "13 €",
        note: "Végétal",
      },
      {
        name: "Karaage de volaille",
        description: "Volaille marinée au shoyu, gingembre, citron et poivre sansho.",
        price: "16 €",
      },
    ],
  },
  {
    title: "Sushi & sashimi",
    intro: "Servis par deux pour les nigiri ; la sélection évolue avec les arrivages.",
    items: [
      {
        name: "Nigiri hamachi",
        description: "Sériole, riz vinaigré, wasabi frais et shoyu léger.",
        price: "12 €",
      },
      {
        name: "Nigiri saumon aburi",
        description: "Saumon légèrement braisé, ponzu, cébette et sésame.",
        price: "11 €",
      },
      {
        name: "Sashimi du jour",
        description: "Six pièces choisies selon la coupe et la fraîcheur du service.",
        price: "24 €",
      },
      {
        name: "Hosomaki concombre",
        description: "Concombre, shiso, sésame et riz vinaigré.",
        price: "9 €",
        note: "Végétal",
      },
    ],
  },
  {
    title: "Plats",
    items: [
      {
        name: "Black cod miso",
        description: "Cabillaud noir mariné au miso blanc, daikon, épinards et bouillon clair.",
        price: "34 €",
      },
      {
        name: "Poulet binchotan",
        description: "Cuisse désossée grillée au charbon, tare, poireau brûlé et riz vapeur.",
        price: "29 €",
      },
      {
        name: "Donabe de saison",
        description: "Riz cuit en cocotte, champignons, légumes racines, dashi kombu et pickles.",
        price: "27 €",
        note: "Végétal sur demande",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Sésame noir",
        description: "Crème glacée au sésame noir, caramel shoyu et riz soufflé.",
        price: "11 €",
      },
      {
        name: "Poire & shiso",
        description: "Poire pochée, granité shiso, crème légère et huile d'agrume.",
        price: "12 €",
      },
    ],
  },
  {
    title: "Saké, thé & sans alcool",
    items: [
      {
        name: "Saké — verre",
        description: "Sélection sèche ou fruitée selon l'accord du moment.",
        price: "9 — 14 €",
      },
      {
        name: "Sencha",
        description: "Thé vert japonais, infusion courte en plusieurs passages.",
        price: "7 €",
      },
      {
        name: "Genmaicha",
        description: "Thé vert au riz grillé, notes toastées et végétales.",
        price: "7 €",
      },
      {
        name: "Yuzu tonic",
        description: "Yuzu, thé blanc, tonic sec et zeste frais.",
        price: "9 €",
        note: "Sans alcool",
      },
    ],
  },
];
