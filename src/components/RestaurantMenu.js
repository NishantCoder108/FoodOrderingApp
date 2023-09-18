import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItemCard from "./RestaurantItemCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuList = useRestaurantMenu(resId) || [];

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

  // console.log({ filterItemCard });
  return (
    <>
      <h1 className="text-center font-bold text-xl p-3">{name}</h1>
      <div className="justify-center flex">
        <div className="w-6/12 flex gap-4 flex-col ">
          {filterItemCard?.map((item) => (
            <div key={item.card.card.title}>
              <div className="justify-between bg-slate-300 p-2 rounded-sm flex">
                <span className="font-bold"> {item.card.card.title} </span>
                <span>🔽</span>
              </div>

              <RestaurantItemCard
                filterListItem={item.card.card?.itemCards || []}
              />
            </div>
          ))}
          {/* {itemCards?.map((item) => {
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
        })} */}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
