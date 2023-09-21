import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    userName: "Anonymous",
  },
  reducers: {
    updateUser: (state, action) => {
      state.userName = action.payload;
    },
    resetUser: () => {
      state.userName("Anonymous");
    },
  },
});

export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
