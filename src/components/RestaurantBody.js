import { useContext, useEffect, useState } from "react";
import ResCard, { WithPromotedCard, withVegCard } from "./ResCard";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../app/UserSlice";

const RestaurantBody = () => {
  const isOnline = useOnlineStatus();
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.loggedInUser.userName);
  const VegResCard = withVegCard(ResCard);
  // const { loggedInUser, setLoggedInUser } = useContext(UserContext);

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

  // console.log(restaurantList);
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

        <input
          type="text"
          value={loggedInUser}
          onChange={(e) => dispatch(updateUser(e.target.value))}
          className="border border-black px-2 ml-4"
        />
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredResList?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
            className=" border border-slate-300 m-1 p-1 hover:border-slate-600 rounded-sm"
          >
            {restaurant?.info?.veg ? (
              <VegResCard resData={restaurant} />
            ) : (
              <ResCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>{" "}
    </>
  );
};

/***
 * veg
 */

export default RestaurantBody;
