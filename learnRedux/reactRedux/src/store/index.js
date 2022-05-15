import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, toggle: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
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

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export const counterActions = counterSlice.actions;
export default store;
