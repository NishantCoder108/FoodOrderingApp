import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./data";
/**
 * App Layout
 *   - Header
 *      - Logo , Home , Menu , ContactUs
 *   - Body
 *      - Restaurant Body
 *         - Res Card
 *            - Name ,Image , Stars, Res, Address
 *   - Footer
 */

const Header = () => {
  return (
    <div className="nav">
      <div>
        <img
          alt="logo"
          className="logo"
          src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-food-logo-designs-with-spoon-and-fork-png-image_4158238.jpg"
        />
      </div>
      <div className="nav-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

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
        <img
          className="res-card-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <h3>{name}</h3>
      <h3>⭐ {avgRating}</h3>
      <h4>
        {locality} {areaName}
      </h4>
    </div>
  );
};
const RestaurantBody = () => {
  return (
    <div className="res-body">
      {resList?.map((restaurant) => (
        <ResCard
          name={restaurant?.info?.name}
          avgRating={restaurant?.info?.avgRating}
          locality={restaurant?.info?.locality}
          areaName={restaurant?.info?.areaName}
          cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
        />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h5>Copyright ©️ 2023 - 2024</h5>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <RestaurantBody />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
