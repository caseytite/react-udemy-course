import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cart, showCart] = useState(false);

  const showCartHandler = () => {
    showCart(true);
  };

  const closeCartHandler = () => {
    showCart(false);
  };

  return (
    <CartProvider>
      {cart && <Cart closeCartHandler={closeCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
