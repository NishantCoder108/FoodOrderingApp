import { useEffect, useState } from "react";
import { resList } from "../utils/data";
import ResCard from "./ResCard";
import Search from "./Search";
import Shimmer from "./Shimmer";

const RestaurantBody = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const filterListFunc = (filterList) => {
    setRestaurantList(filterList);
  };

  useEffect(() => {
    fetchResList();
    console.log("UseEffect Called");
  }, []);

  const fetchResList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6039168&lng=85.1360248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const dataJson = await data.json();

    setRestaurantList(
      dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
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
