import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: 0, cart: [] },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const inCart = state.cart.find((item) => item.id === newItem.id);

      state.items++;
      if (!inCart) {
        state.cart.push(newItem);
      } else {
        inCart.quantity++;
        inCart.totalCost += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload.id;
      const item = state.cart.find((item) => item.id === id);

      state.items--;
      if (item.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        --item.quantity;
        item.totalCost -= item.price;
      }
    },
  },
});

export default cartSlice;
