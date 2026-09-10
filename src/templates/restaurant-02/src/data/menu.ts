import type { District88MenuSection } from "@/src/templates/restaurant-02/types";

export const district88Menu: District88MenuSection[] = [
  {
    id: "smash",
    label: "SMASH",
    items: [
      { name: "D88 DOUBLE", description: "2 patties, american cheese, pickles, onion, house sauce", price: "14", signature: true },
      { name: "RED LINE", description: "2 patties, cheddar, jalapeño, hot sauce, slaw", price: "15" },
      { name: "ONION UNIT", description: "smashed onion patty, cheese, mustard, pickles", price: "13" },
      { name: "MUSHROOM MELT", description: "mushroom patty, provolone, pepper sauce, crispy onion", price: "14" },
    ],
  },
  {
    id: "fried",
    label: "FRIED",
    items: [
      { name: "HOT BIRD", description: "fried chicken, chili glaze, pickles, white sauce", price: "14", signature: true },
      { name: "CRUNCH 88", description: "fried chicken, cabbage, lime, black pepper mayo", price: "13" },
      { name: "CAULI FIRE", description: "crispy cauliflower, chili oil, sesame, herbs", price: "12" },
    ],
  },
  {
    id: "sides",
    label: "SIDES",
    items: [
      { name: "DIRTY FRIES", description: "fries, cheese sauce, onion, house dust", price: "7", signature: true },
      { name: "SALT FRIES", description: "skin-on fries, sea salt", price: "5" },
      { name: "SLAW", description: "cabbage, lime, herbs, toasted seeds", price: "5" },
    ],
  },
  {
    id: "sauces",
    label: "SAUCES",
    items: [
      { name: "HOUSE 88", description: "smoky, acidic, creamy", price: "2", signature: true },
      { name: "RED HOT", description: "fermented chili, vinegar", price: "2" },
      { name: "WHITE PEPPER", description: "pepper, lemon, garlic", price: "2" },
    ],
  },
  {
    id: "drinks",
    label: "DRINKS",
    items: [
      { name: "COLA", description: "33 cl", price: "4" },
      { name: "GINGER", description: "ginger beer · 33 cl", price: "4" },
      { name: "LEMON", description: "sparkling lemon · 33 cl", price: "4" },
      { name: "WATER", description: "still / sparkling · 50 cl", price: "3" },
    ],
  },
];
