import { CDN_IMG_URL } from "../utils/constants";

const RestaurantItemCard = ({ filterListItem = [], showMenu = false }) => {
  return (
    showMenu && (
      <div className="bg-slate-300">
        {filterListItem?.map((item) => (
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

            <div className="w-2/12">
              <img className="" src={CDN_IMG_URL + item.card.info.imageId} />
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default RestaurantItemCard;
