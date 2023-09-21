import { useSelector } from "react-redux";
import RestaurantItemCard from "./RestaurantItemCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.items);
  return (
    <div className=" mx-auto w-[52rem]">
      {cartItems.length === 0 ? (
        <h1 className="p-4">
          No items in your cart yet. Start shopping to add products!!
        </h1>
      ) : (
        <RestaurantItemCard filterListItem={cartItems} />
      )}
    </div>
  );
};

export default Cart;
