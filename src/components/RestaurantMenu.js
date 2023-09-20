import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItemCard from "./RestaurantItemCard";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuList = useRestaurantMenu(resId) || [];
  const [hideIdx, setHideIdx] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  if (resMenuList.length === 0) return <Shimmer />;

  const { name } = resMenuList[0].card?.card?.info;
  const { itemCards } =
    resMenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const filterItemCard =
    resMenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleMenuCard = (idx) => {
    console.log(idx);
    setHideIdx(idx);
  };
  return (
    <>
      <h1 className="text-center font-bold text-xl p-3">{name}</h1>
      <div className="justify-center flex">
        <div className="w-6/12 flex gap-4 flex-col ">
          {filterItemCard?.map((item, index) => (
            <div key={item.card.card.title}>
              <div
                onClick={() => {
                  console.log("clicked" + index);
                  // toggleMenuCard(index);
                  setHideIdx(index);
                }}
                className="justify-between bg-slate-300 p-2 rounded-sm flex"
              >
                <span className="font-bold"> {item.card.card.title} </span>
                <span>🔽</span>
              </div>
              {console.log("hide Index", hideIdx + "index" + index)}{" "}
              {
                <RestaurantItemCard
                  hideMenu={index === hideIdx ? false : true}
                  filterListItem={item.card.card?.itemCards || []}
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
