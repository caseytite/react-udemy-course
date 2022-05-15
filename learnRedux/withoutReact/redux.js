const redux = require("redux");

//reducer function that will update state
const counterReducer = (currentState = { counter: 0 }, action) => {
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
  return currentState;
};

// initializes the store
const STORE = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // gets the state from the reducer subscribed to STORE
  const latestState = STORE.getState();
  console.log(latestState);
};

// wires up the subscribe function to the store
STORE.subscribe(counterSubscriber);

STORE.dispatch({ type: "increment" });
STORE.dispatch({ type: "decrement" });
