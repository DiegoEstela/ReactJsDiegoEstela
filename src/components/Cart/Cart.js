import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartTable } from "./CartTable";
import { CartVacio } from "./CartVacio";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return <div>{cart.length ? <CartTable /> : <CartVacio />}</div>;
}
