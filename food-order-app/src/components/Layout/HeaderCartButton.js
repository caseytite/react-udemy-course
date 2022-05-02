import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ showCartHandler }) => {
  const context = useContext(CartContext);
  const [btnBump, setBtnBump] = useState(false);
  const { items } = context;
  const numOfCartItems = items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnBump ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
