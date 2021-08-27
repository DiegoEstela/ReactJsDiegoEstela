import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartTable } from "./CartTable";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.length ? <CartTable /> : <h1>No hay items en el carrito</h1>}
    </div>
  );
}
