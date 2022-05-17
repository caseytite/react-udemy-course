import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";
const CartButton = ({ onClick }) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <button className={classes.button} onClick={onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{items}</span>
    </button>
  );
};

export default CartButton;
