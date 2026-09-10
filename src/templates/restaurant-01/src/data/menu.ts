import type { SilexMenuSection } from "../../types";

export const silexMenuPrice = "145 €";
export const silexPairingPrice = "72 €";

export const silexMenu: SilexMenuSection[] = [
  {
    title: "Menu dégustation",
    intro: "Six temps · inspiration du marché",
    items: [
      {
        name: "Amuse-bouche",
        description: "Sarrasin, champignon, crème crue",
      },
      {
        name: "Poireau brûlé",
        description: "Crème fumée, noisette, huile de livèche",
      },
      {
        name: "Truite",
        description: "Oseille, beurre noisette, œufs fumés",
      },
      {
        name: "Céleri-rave",
        description: "Coing, graines torréfiées, jus végétal",
      },
      {
        name: "Canard",
        description: "Betterave, cassis, jus réduit",
      },
      {
        name: "Poire",
        description: "Sarrasin, lait ribot, caramel blond",
      },
    ],
  },
  {
    title: "Accord sans alcool",
    intro: "Infusions, fermentations et jus travaillés au fil du menu",
    items: [
      {
        name: "Accord maison",
        description: "Six verres servis en parallèle du menu",
        price: "48 €",
      },
    ],
  },
  {
    title: "Accord vins",
    intro: "Sélection européenne, domaines à taille humaine",
    items: [
      {
        name: "Accord six verres",
        description: "Blancs, rouges et une finale douce selon le menu",
        price: silexPairingPrice,
      },
    ],
  },
];

export const silexMenuNote =
  "Le menu est fictif et présenté à titre de démonstration. Les intitulés, prix et accords sont illustratifs et peuvent évoluer lors d'une adaptation client.";
