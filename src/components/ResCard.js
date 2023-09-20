import { CDN_IMG_URL } from "../utils/constants";

const ResCard = ({
  name,
  avgRating,
  locality,
  areaName,
  cloudinaryImageId,
  veg,
}) => {
  return (
    <div className="w-[215px] relative ">
      {veg && (
        <span className="absolute top-0 font-black bg-white rounded-br-md p-1">
          Promoted
        </span>
      )}
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

export const WithPromotedCard = (component) => {
  return () => {
    return (
      <div className="w-[215px] relative ">
        <span className="absolute top-0 font-black bg-white rounded-br-md p-1">
          Promoted
        </span>

        {/* {<ResCard {...component} />} */}
      </div>
    );
  };
};

export default ResCard;
