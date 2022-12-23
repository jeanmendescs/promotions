import { IGetPromotions } from "../types/interfaces";

export default function getPromotion(
  id: IGetPromotions["id"],
  promotions: IGetPromotions["promotions"],
) {
  return promotions.find((promotion) => promotion.id === id);
}
