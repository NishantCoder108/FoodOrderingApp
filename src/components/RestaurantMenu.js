import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItemCard from "./RestaurantItemCard";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIdx, setShowIdx] = useState(0);
  const { resId } = useParams();
  const resMenuList = useRestaurantMenu(resId) || [];

  if (resMenuList.length === 0) return <Shimmer />;

  const { name } = resMenuList[0].card?.card?.info;

  const filterItemCard =
    resMenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log({ filterItemCard });
  return (
    <>
      <h1 className="text-center font-bold text-xl p-3">{name}</h1>
      <div className="justify-center flex">
        <div className="w-6/12 flex gap-4 flex-col ">
          {filterItemCard?.map((item, index) => (
            <div key={item.card.card.title}>
              <div
                onClick={() => {
                  setShowIdx(index);
                }}
                className="justify-between bg-slate-300 p-2 rounded-sm flex cursor-pointer"
              >
                <span className="font-bold">
                  {item.card.card.title} ({item.card.card.itemCards.length})
                </span>
                <span>🔽</span>
              </div>
              {
                <RestaurantItemCard
                  showMenu={index === showIdx}
                  filterListItem={item}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
