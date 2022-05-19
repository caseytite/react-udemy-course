import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);

  const totalItems = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const items = cart.map((item) => (
    <CartItem
      key={item.id}
      item={{
        title: item.description,
        quantity: item.quantity,
        price: item.price,
        id: item.id,
        totalCost: item.totalCost,
      }}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>{`You have ${
        totalItems === 0
          ? "no items in your cart."
          : totalItems === 1
          ? "one item in your cart."
          : totalItems + " items in your cart."
      }`}</h2>
      <ul>{items}</ul>
    </Card>
  );
};

export default Cart;
