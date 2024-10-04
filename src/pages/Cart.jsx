import React, { useContext } from "react";
import pizzas from "../pizzas";
import { formatNumber } from "../scripts";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, calculateTotal } =
    useContext(CartContext);
  const { token } = useContext(AuthContext);

  const checkoutCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ Cart, totalAmount: calculateTotal }),
      });

      if (!response.ok) {
        throw new Error("Error al procesar el pago. Intenta nuevamente.");
      }

      const result = await response.json();

      Swal.fire({
        title: "Pago exitoso",
        text: `Tu compra se ha realizado con éxito`,
        icon: "success",
        confirmButtonText: "Cerrar",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };

  const validateAuth = () => {
    if (!token) {
      Swal.fire({
        title: "Error!",
        text: "Debes iniciar sesión para poder realizar el pago",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      return;
    }

    checkoutCart();
  };

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
                    <button onClick={() => decreaseQuantity(pizza.id)}>
                      -
                    </button>
                    <button onClick={() => addToCart(pizza)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${formatNumber(calculateTotal())}</h3>
          <button onClick={() => validateAuth()}>Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
