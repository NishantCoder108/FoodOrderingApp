import { CDN_IMG_URL } from "../utils/constants";

const ResCard = ({ resData }) => {
  // console.log(resData);
  const { name, avgRating, locality, areaName, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="w-[215px] ">
      <div className="res-img-card-wrapper">
        <img
          className="w-[215px] max-h-40"
          src={CDN_IMG_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold">{name}</h3>
      <h3>⭐ {avgRating} stars</h3>
      <h4 className="max-w-[200px]">
        {locality} {areaName}
      </h4>
    </div>
  );
};

export const withVegCard = (ResCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-0 font-black bg-green-300 rounded-br-sm p-1">
          VEG
        </span>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
