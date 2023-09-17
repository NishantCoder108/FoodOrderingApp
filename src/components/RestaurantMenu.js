import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuList = useRestaurantMenu(resId) || [];

  if (resMenuList.length === 0) return <Shimmer />;

  const { name } = resMenuList[0].card?.card?.info;
  const { itemCards } =
    resMenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <>
      <h1 className="resName">{name}</h1>
      <h2 style={{ textAlign: "center" }}>Restaurant Menu Recommended</h2>
      <div className="resMenu">
        {itemCards?.map((item) => {
          return (
            <div className="resMenuList" key={item.card.info.id}>
              <h2>
                {item.card.info.name} - Rs
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h2>
              <h3> {item.card.info.isVeg ? "VEG" : "Non-VEG"} </h3>
              <h3> {item.card.info.category} </h3>
              <h3> {item.card.info.description} </h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
