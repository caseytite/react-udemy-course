import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      if (
        action.payload.email === "casey@email.com" &&
        action.payload.password === "123"
      ) {
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
