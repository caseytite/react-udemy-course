import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./reducers/uiSlice";
import cartSlice from "./reducers/cartSlice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export const uiActions = uiSlice.actions;
export const cartActions = cartSlice.actions;
export default store;
