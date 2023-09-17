import React from "react";

const Search = ({ restaurantList = [], filterListFunc = () => {} }) => {
  return (
    <div className="search">
      <button
        className="bg-slate-400 py-1 px-9 ml-9 rounded-sm"
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
