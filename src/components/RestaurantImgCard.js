import { useDispatch } from "react-redux";
import { CDN_IMG_URL } from "../utils/constants";
import { addToCart, removeToCart } from "../app/CartSlice";

const RestaurantImgCard = ({ cardItems }) => {
  const { imageId } = cardItems?.card?.info;
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addToCart(cardItems));
  };

  const handleRemoveCart = () => {
    dispatch(removeToCart());
  };
  return (
    <div>
      {imageId ? (
        <img className="" src={CDN_IMG_URL + imageId} />
      ) : (
        <div className="bg-[#fff8dc] rounded-sm  w-31 h-28  hover:bg-slate-200"></div>
      )}

      <div className="bottom-[1.5rem] relative">
        <button
          className="absolute left-[25%]   font-extrabold border  rounded-sm px-2 bg-white text-black"
          onClick={handleAddCart}
        >
          +
        </button>
        <button
          className="absolute right-[25%]  font-extrabold border  rounded-sm px-2 bg-white text-black"
          onClick={handleRemoveCart}
        >
          -
        </button>{" "}
      </div>
    </div>
  );
};

export const withInStockRestaurantImgCard = (InStockComponent) => {
  return (props) => {
    console.log("withInStockResImgCa", props);
    const { inStock } = props.cardItems?.card?.info;
    return (
      <div>
        <span className="text-[#6907079f]  font-semibold rounded-md p-1 text-center absolute">
          Left In Stock : {inStock}
        </span>

        <InStockComponent {...props} />
      </div>
    );
  };
};
export default RestaurantImgCard;
