import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: 0, total: 0, cart: [] },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const inCart = state.cart.find((item) => item.id === newItem.id);
      state.total += newItem.price;

      if (!inCart) {
        ++state.items;
        state.cart.push(newItem);
      } else {
        inCart.quantity++;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const item = state.cart.find((item) => item.id === id);

      if (item.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
        --state.items;
        state.total = state.total - item.amount;
      } else {
        --item.quantity;
        state.total = state.total - item.amount;
      }
    },
  },
});

export default cartSlice;
