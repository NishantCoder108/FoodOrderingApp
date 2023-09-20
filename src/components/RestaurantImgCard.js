import { CDN_IMG_URL } from "../utils/constants";

const RestaurantImgCard = ({ cardItems }) => {
  const { imageId } = cardItems?.card?.info;
  return (
    <div className="w-2/12">
      {imageId ? (
        <img className="" src={CDN_IMG_URL + imageId} />
      ) : (
        <div className="bg-neutral-400 w-full h-full"> </div>
      )}
    </div>
  );
};

export default RestaurantImgCard;
