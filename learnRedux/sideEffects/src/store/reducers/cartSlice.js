import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: 0, total: 0 },
  reducers: {
    addItem(state, action) {
      state.items = ++state.items;
      state.total = state.total + action.payload.amount;
    },
    removeItem(state, action) {
      state.items = --state.items;
      state.total = state.total - action.payload.amount;
    },
  },
});

export default cartSlice;
