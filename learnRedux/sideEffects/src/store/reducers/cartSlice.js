import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: 0, cart: [] },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      const inCart = state.cart.find((item) => item.id === newItem.id);
      state.items++;
      if (!inCart) {
        // ++state.items;
        state.cart.push(newItem);
      } else {
        console.log(state.cart);
        inCart.quantity++;
        inCart.totalCost += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload.id;
      console.log(action.payload);
      const item = state.cart.find((item) => item.id === id);
      console.log(item);

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
