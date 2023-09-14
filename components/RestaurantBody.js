import { resList } from "../utils/data";
import ResCard from "./ResCard";

const RestaurantBody = () => {
  return (
    <div className="res-body">
      {resList?.map((restaurant) => (
        <ResCard
          name={restaurant?.info?.name}
          avgRating={restaurant?.info?.avgRating}
          locality={restaurant?.info?.locality}
          areaName={restaurant?.info?.areaName}
          cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
        />
      ))}
    </div>
  );
};

export default RestaurantBody;
