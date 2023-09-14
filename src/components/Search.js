import React from "react";

const Search = ({ restaurantList = [], filterListFunc = () => {} }) => {
  return (
    <div className="search">
      <button
        onClick={() => {
          const filteredList = restaurantList?.filter(
            (restaurant) => restaurant.info.avgRating > 4
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
