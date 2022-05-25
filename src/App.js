import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShow] = useState(false);

  const showCartHander = () => {
    setCartIsShow(true);
  };

  const hideCartHander = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHander}/>}
      <Header onShowCart={showCartHander}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
