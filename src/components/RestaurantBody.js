import { useState } from "react";
import { resList } from "../utils/data";
import ResCard from "./ResCard";
import Search from "./Search";

const RestaurantBody = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  const filterListFunc = (filterList) => {
    setRestaurantList(filterList);
  };
  return (
    <>
      <Search restaurantList={restaurantList} filterListFunc={filterListFunc} />
      <div className="res-body">
        {restaurantList?.map((restaurant) => (
          <ResCard
            key={restaurant?.info?.id}
            name={restaurant?.info?.name}
            avgRating={restaurant?.info?.avgRating}
            locality={restaurant?.info?.locality}
            areaName={restaurant?.info?.areaName}
            cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
          />
        ))}
      </div>{" "}
    </>
  );
};

export default RestaurantBody;
