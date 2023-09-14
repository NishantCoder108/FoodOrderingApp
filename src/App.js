import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./utils/data";
import Header from "./components/Header";
import RestaurantBody from "./components/RestaurantBody";
import Footer from "./components/Footer";
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
