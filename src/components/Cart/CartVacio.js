import React from "react";
import "./Cart.css";

export const CartVacio = () => {
  return (
    <div className="bodyCarrito">
      {" "}
      <div className="carritoVacio">
        {" "}
        <h2>El carro Esta vacio</h2>
      </div>
    </div>
  );
};
