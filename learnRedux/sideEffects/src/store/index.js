import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./reducers/uiSlice";

const store = configureStore({
  reducer: { ui: UiSlice.reducer },
});

export default store;
