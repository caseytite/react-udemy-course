import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ closeCartHandler }) => {
  const context = useContext(CartContext);
  const cartAmount = `$${context.totalAmount.toFixed(2)}`;

  const onAdd = (item) => {};
  const onRemove = (id) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={onAdd.bind(null, item)}
          onRemove={onRemove.bind(null, item.id)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal closeCartHandler={closeCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closeCartHandler} className={classes["button--alt"]}>
          Close
        </button>
        {context.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
