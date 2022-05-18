import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
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
      <h2>Your Shopping Cart</h2>
      <ul>{items}</ul>
    </Card>
  );
};

export default Cart;
