import type { TerraMenuCategory } from "@/src/templates/restaurant-03/types";

export const terraMenu: TerraMenuCategory[] = [
  {
    name: "À partager",
    items: [
      { name: "Focaccia chaude", description: "Huile d’olive, romarin, sel fumé.", price: "7 €", marker: "V" },
      { name: "Labneh", description: "Citron confit, zaatar, huile d’olive.", price: "9 €", marker: "V" },
      { name: "Aubergine brûlée", description: "Tahini citronné, herbes, sésame.", price: "13 €", marker: "VG" },
    ],
  },
  {
    name: "Légumes",
    items: [
      { name: "Tomates & brebis", description: "Tomates mûres, brebis, basilic, huile fruitée.", price: "14 €", marker: "V" },
      { name: "Courgette au feu", description: "Yaourt, menthe, amande, citron.", price: "12 €", marker: "V" },
      { name: "Fenouil rôti", description: "Orange, olives, chapelure aux herbes.", price: "13 €", marker: "VG" },
    ],
  },
  {
    name: "Feu",
    items: [
      { name: "Poulet fermier", description: "Citron, ail, jus court, pommes de terre rôties.", price: "23 €" },
      { name: "Agneau grillé", description: "Poivron fumé, yaourt épicé, herbes.", price: "27 €" },
      { name: "Chou braisé", description: "Harissa douce, noisette, persil plat.", price: "18 €", marker: "VG" },
    ],
  },
  {
    name: "Mer",
    items: [
      { name: "Poisson, citron, fenouil", description: "Poisson du jour, fenouil croquant, agrumes.", price: "24 €" },
      { name: "Calamar grillé", description: "Persil, ail, citron, huile pimentée.", price: "21 €" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Crème citron", description: "Huile d’olive, fleur de sel, biscuit.", price: "9 €", marker: "V" },
      { name: "Pêche rôtie", description: "Yaourt glacé, miel, thym.", price: "10 €", marker: "V" },
      { name: "Chocolat & sésame", description: "Ganache noire, sésame grillé, crème légère.", price: "10 €", marker: "V" },
    ],
  },
  {
    name: "Boissons",
    items: [
      { name: "Citronnade maison", description: "Citron, verveine, eau pétillante.", price: "5 €" },
      { name: "Thé glacé pêche", description: "Thé noir, pêche, romarin.", price: "5 €" },
      { name: "Eau filtrée", description: "Plate ou pétillante.", price: "3 €" },
    ],
  },
];
