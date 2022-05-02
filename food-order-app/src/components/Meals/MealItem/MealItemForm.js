import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

import { useRef, useState } from "react";

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountRef.current.value;

    if (enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: `amount${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!amountIsValid && <p>Improper Amount</p>}
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
