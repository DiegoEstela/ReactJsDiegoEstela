import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";
import { CartForm } from "./CartForm";
import { CartTable } from "./CartTable";
import { CartVacio } from "./CartVacio";
import DatosCompras from "./DatosCompras";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const { OrdenId } = useContext(UserContext);
  return (
    <div>
      {cart.length ? (
        <>
          {OrdenId ? (
            <DatosCompras />
          ) : (
            <div>
              <CartTable />
              <CartForm />
            </div>
          )}
        </>
      ) : (
        <CartVacio />
      )}
    </div>
  );
}
