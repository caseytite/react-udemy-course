import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = ({ name, description, price, id }) => {
  const context = useContext(CartContext);
  const onAddToCart = (amount) => {
    context.addItem({ id, name, price, amount });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
