// import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store/index";
// connect is needed for the class based components
// import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.toggle);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: "decrement" });
  };

  const doubleHandler = () => {
    dispatch(counterActions.double({ amount: counter }));
    // dispatch({ type: "double", amount: counter });
  };

  const resetHandler = () => {
    dispatch(counterActions.reset({ amount: counter }));
    // dispatch({ type: "reset", amount: counter });
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
    // dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={doubleHandler}>double</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={resetHandler}>reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class ClassCounter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   };
//   decrementHandler = () => {
//     this.props.decrement();
//   };
//   toggleCounterHandler = () => {};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>

//         <div>
//           <button onClick={this.incrementHandler.bind()}>increment</button>
//           <button onClick={this.decrementHandler.bind()}>decrement</button>
//         </div>

//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment"}),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// // export default Counter;
// export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
