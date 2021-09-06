import { Button } from "react-bootstrap";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export const CartVacio = () => {
  return (
    <div className="bodyCarrito">
      <div className="carritoVacio">
        <h2>Carrito Vacio</h2>
        <Link className="btnCarritoVacio" to="/ItemList">
          <Button className="btnCarritoVacio">Volver a Productos</Button>
        </Link>
      </div>
    </div>
  );
};
