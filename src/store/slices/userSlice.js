import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: true,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const cartActions = userSlice.actions;
export default userSlice;
