import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatergoryItem from "./RestauranCategoryItem";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(null);
  const { resId } = useParams();
  const resMenuList = useRestaurantMenu(resId) || [];

  const handleToggle = (idx) => {
    console.log("clicked");
    setShowItems((prevState) => (prevState === idx ? null : idx));
  };

  if (resMenuList.length === 0) return <Shimmer />;

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

  const { name, cuisines, costForTwoMessage } = resMenuList[0].card?.card?.info;

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
              showItems={index === showItems}
              key={item.card.card.title}
              data={item?.card?.card}
              // setShowItems={() => setShowItems(index)}
              handleToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
