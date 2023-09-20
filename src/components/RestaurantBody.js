import { useEffect, useState } from "react";
import ResCard, { WithPromotedCard } from "./ResCard";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantBody = () => {
  const isOnline = useOnlineStatus();
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterListFunc = (filterList) => {
    setFilteredResList(filterList);
  };

  useEffect(() => {
    fetchResList();
  }, []);

  const fetchResList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6039168&lng=85.1360248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const dataJson = await data.json();

    setRestaurantList(
      dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredResList(
      dataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  console.log(restaurantList);
  if (!isOnline) return <h1>Oops!!, You are looking ,You are OFFLINE 🔴 </h1>;

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex mb-9 ml-5">
        <div>
          <input
            className=" border border-black rounded-sm"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="py-1 px-3 ml-3 bg-blue-400 rounded-sm"
            onClick={() => {
              const searchedResList = restaurantList?.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase().trim())
              );
              setFilteredResList(searchedResList);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <Search
          restaurantList={restaurantList}
          filterListFunc={filterListFunc}
        />
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredResList?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
            className=" border border-slate-300 m-1 p-1 hover:border-slate-600 rounded-sm"
          >
            {!restaurant?.info?.veg ? (
              <ResCard
                name={restaurant?.info?.name}
                avgRating={restaurant?.info?.avgRating}
                locality={restaurant?.info?.locality}
                areaName={restaurant?.info?.areaName}
                cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
              />
            ) : (
              <WithPromotedCard
              // component={
              //   <ResCard
              //     name={restaurant?.info?.name}
              //     avgRating={restaurant?.info?.avgRating}
              //     locality={restaurant?.info?.locality}
              //     areaName={restaurant?.info?.areaName}
              //     cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
              //   />
              // }
              />
            )}
          </Link>
        ))}
      </div>{" "}
    </>
  );
};

export default RestaurantBody;
