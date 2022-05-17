import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";

const CartItem = (props) => {
  const { title, price } = props.item;
  const amount = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  console.log(price);

  const onAdd = () => {
    dispatch(cartActions.addItem({ amount: price }));
  };
  const onRemove = () => {
    if (total > 0) {
      dispatch(cartActions.removeItem({ amount: price }));
    }
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)})</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemove}>-</button>
          <button onClick={onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
