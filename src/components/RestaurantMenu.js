import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatergoryItem from "./RestauranCategoryItem";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuList = useRestaurantMenu(resId) || [];

  if (resMenuList.length === 0) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resMenuList[0].card?.card?.info;

  const filterItemCard =
    resMenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(
    " resMenuList[0].card?.card?.info",
    resMenuList[0].card?.card?.info
  );
  console.log({ filterItemCard });
  return (
    <>
      <h1 className="text-center font-bold text-xl p-3">
        {name} - {costForTwoMessage}
      </h1>
      <h3 className="text-center pb-5">{cuisines.join(", ")}</h3>
      <div className="justify-center flex">
        <div className="w-6/12 flex gap-4 flex-col ">
          {filterItemCard?.map((item, index) => (
            <RestaurantCatergoryItem
              key={item.card.card.title}
              data={item?.card?.card}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
