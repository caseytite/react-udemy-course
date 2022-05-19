import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

const CartItem = ({ item }) => {
  const { title, price, id, description, quantity, totalCost } = item;

  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        description,
        quantity: 1,
      })
    );
  };
  const onRemove = () => {
    dispatch(cartActions.removeItem({ id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalCost.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            {`($${price.toFixed(2)}/item)`}
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
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
