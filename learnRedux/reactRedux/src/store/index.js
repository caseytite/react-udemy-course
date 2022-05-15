import { createStore } from "redux";

const counterReducer = (
  currentState = { counter: 0, toggle: true },
  action
) => {
  if (action.type === "increment") {
    return {
      counter: ++currentState.counter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: --currentState.counter,
    };
  }
  if (action.type === "toggle") {
    return {
      toggle: !currentState.toggle,
    };
  }
  return currentState;
};

const store = createStore(counterReducer);

export default store;
