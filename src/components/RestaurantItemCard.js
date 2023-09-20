import RestaurantImgCard from "./RestaurantImgCard";

const RestaurantItemCard = ({ filterListItem = {}, showMenu = false }) => {
  const { itemCards = [] } = filterListItem?.card?.card;
  console.log({ itemCards });

  return (
    showMenu && (
      <div className="bg-slate-300">
        {itemCards?.map((item) => (
          <div key={item.card.info.id} className="flex justify-between  py-3">
            <div className="flex flex-col p-2  w-10/12 ">
              <span className="font-semibold">
                {item.card.info.name} - Rs.{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
              </span>
              <span>{item.card.info.category} </span>
              <p className="py-3">{item.card.info.description} </p>
            </div>

            <RestaurantImgCard cardItems={item} />
          </div>
        ))}
      </div>
    )
  );
};

export const withInStockRestaurantItemCard = (InStockComponent) => {
  return (props) => {
    return (
      <div>
        <h1>In Stock </h1>

        <InStockComponent {...props} />
      </div>
    );
  };
};
export default RestaurantItemCard;
