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

const STORE = createStore(counterReducer);

export default STORE;
