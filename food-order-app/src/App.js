import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

const App = () => {
  const [cart, showCart] = useState(false);

  const showCartHandler = () => {
    showCart(true);
  };

  const closeCartHandler = () => {
    showCart(false);
  };

  return (
    <>
      {cart && <Cart closeCartHandler={closeCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
