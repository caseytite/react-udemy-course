import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";

const CartItem = ({ item }) => {
  const { title, price, id, description, quantity, totalCost } = item;

  const amount = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  console.log(total);
  const dispatch = useDispatch();
  console.log(price);
  console.log(item);
  const onAdd = () => {
    console.log(item);
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
  console.log(price);
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
