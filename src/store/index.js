import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./slices/shopSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    shop: shopSlice.reducer,
  },
});

export default store;
