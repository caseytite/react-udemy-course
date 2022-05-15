// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

const counterReducer = (currentState = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: ++currentState,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: --currentState,
    };
  }
  return currentState;
};

// const STORE = configureStore(counterReducer);
const store = createStore(counterReducer);

export default store;
