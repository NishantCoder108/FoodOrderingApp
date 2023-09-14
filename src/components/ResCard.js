import { CDN_IMG_URL } from "../utils/constants";

const ResCard = ({
  name,
  avgRating,
  locality,
  areaName,
  cloudinaryImageId,
}) => {
  return (
    <div className="res-card">
      <div className="res-img-card-wrapper">
        <img className="res-card-img" src={CDN_IMG_URL + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h3>⭐ {avgRating}</h3>
      <h4>
        {locality} {areaName}
      </h4>
    </div>
  );
};

export default ResCard;
