import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantMenuList, setRestaurantMenuLis] = useState(null);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + restaurantId);
    const json = await data.json();

    setRestaurantMenuLis(json?.data?.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantMenuList;
};

export default useRestaurantMenu;
