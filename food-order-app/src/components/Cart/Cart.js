import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = ({ closeCartHandler }) => {
  const context = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "1", name: "Pizza", amount: "10", price: "4.99" }].map(
        (item, index) => {
          return <li key={index}>{item.name}</li>;
        }
      )}
    </ul>
  );

  return (
    <Modal closeCartHandler={closeCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50.23</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closeCartHandler} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
