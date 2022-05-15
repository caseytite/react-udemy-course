import { createStore } from "redux";

const counterReducer = (
  currentState = { counter: 0, toggle: true },
  action
) => {
  if (action.type === "increment") {
    return {
      counter: ++currentState.counter,
      toggle: currentState.toggle,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: --currentState.counter,
      toggle: currentState.toggle,
    };
  }
  if (action.type === "double") {
    return {
      counter: (currentState.counter += action.amount),
      toggle: currentState.toggle,
    };
  }
  if (action.type === "reset") {
    return {
      counter: (currentState.counter -= action.amount),
      toggle: currentState.toggle,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: currentState.counter,
      toggle: !currentState.toggle,
    };
  }
  return currentState;
};

const store = createStore(counterReducer);

export default store;
