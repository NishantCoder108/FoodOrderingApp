import { useSelector } from "react-redux";
import RestaurantItemCard from "./RestaurantItemCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.items);
  return (
    <div className=" mx-auto w-[52rem]">
      <RestaurantItemCard filterListItem={cartItems} />
    </div>
  );
};

export default Cart;
