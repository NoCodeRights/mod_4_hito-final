import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
    console.log('hola')
  }, [cartItems]);

  const addToCart = (pizza) => {
    console.log(pizza);
    const existingItem = cartItems.find((item) => item.id === pizza.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (pizzaId) => {
    const existingItem = cartItems.find((item) => item.id === pizzaId);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== pizzaId));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const calculateTotal = () => {
    console.log(cartItems);
    let nuevoTotal = cartItems.reduce((total, item) => total + item.pizzaPrice * item.quantity, 0);
    setTotal(nuevoTotal);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseQuantity, calculateTotal, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
