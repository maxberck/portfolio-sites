import { createKuroMetadata } from "@/src/templates/restaurant-04/lib/metadata";
import { RestaurantPage } from "@/src/templates/restaurant-04/pages/RestaurantPage";

export const metadata = createKuroMetadata(
  "Restaurant",
  "Découvrez l'approche de démonstration Kuro : saison, gestes précis, service calme et atmosphère japonaise contemporaine.",
);

export default function Page() {
  return <RestaurantPage />;
}
