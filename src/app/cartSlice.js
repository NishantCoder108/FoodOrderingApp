import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Items",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },

    removeToCart: (state, action) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0; //[]
    },
  },
});

export const { addToCart, removeToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
