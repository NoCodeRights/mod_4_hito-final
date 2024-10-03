import React, { useContext } from "react";
import pizzas from "../pizzas";
import { formatNumber } from "../scripts";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, calculateTotal } = useContext(CartContext);

  return (
    <div>
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((pizza) => (
              <li key={pizza.id}>
                <img src={pizza.pizzaImg} alt={pizza.pizzaName} />
                <div>
                  <span>
                    {pizza.pizzaName} (x{pizza.quantity})
                  </span>
                  <span>{pizza.pizzaPrice * pizza.quantity}</span>
                  <div>
                    <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
                    <button onClick={() => addToCart(pizza)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${formatNumber(calculateTotal())}</h3>
          <button>Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
