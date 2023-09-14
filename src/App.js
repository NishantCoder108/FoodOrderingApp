import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantBody from "./components/RestaurantBody";
import Footer from "./components/Footer";
import Search from "./components/Search";

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
