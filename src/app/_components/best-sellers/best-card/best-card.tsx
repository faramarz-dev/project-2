import { IBestSellersCard } from "./best-card.types";
import FavoriteCard from "../../favorites/favorite-card/favorite-card";

export const BestSellersCard: React.FC<IBestSellersCard> = (props) => {
  return (
    <>
      <FavoriteCard {...props} />
    </>
  );
};
