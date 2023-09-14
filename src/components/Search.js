import React from "react";

const Search = ({ restaurantList = [], filterListFunc = () => {} }) => {
  console.log({ restaurantList, filterListFunc });
  return (
    <div className="search">
      <button
        onClick={() => {
          const filteredList = restaurantList?.filter(
            (restaurant) => restaurant.info.avgRating > 3.5
          );

          filterListFunc(filteredList);
        }}
      >
        Top Rating Restaurant
      </button>
    </div>
  );
};

export default Search;
