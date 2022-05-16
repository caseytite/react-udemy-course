import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, toggle: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    double(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    reset(state, action) {
      state.counter = state.counter - action.payload.amount;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export default counterSlice;
