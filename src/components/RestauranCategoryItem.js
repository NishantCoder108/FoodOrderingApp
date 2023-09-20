import { useState } from "react";
import RestaurantItemCard from "./RestaurantItemCard";

const RestaurantCatergoryItem = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleToggle = () => {
    console.log("clicked");
    setShowItems(!showItems);
  };
  return (
    <div>
      <div
        onClick={() => {
          handleToggle();
        }}
        className="justify-between bg-slate-300 p-2 rounded-sm flex cursor-pointer"
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems && <RestaurantItemCard filterListItem={data.itemCards} />}
    </div>
  );
};

export default RestaurantCatergoryItem;
