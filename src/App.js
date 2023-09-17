import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantBody from "./components/RestaurantBody";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <RestaurantBody /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <ContactUs /> },
      { path: "/login", element: <Login /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
