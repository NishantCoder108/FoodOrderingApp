import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    loggedInUser: "Anonymous",
  },
  reducers: {
    updateUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    resetUser: () => {
      state.loggedInUser("Anonymous");
    },
  },
});

export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
