import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    cartItems: cartReducer,
    loggedInUser: userReducer,
  },
});

export default store;
