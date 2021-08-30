import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import { CartContext } from "../../Context/CartContext";
import percha from "../../img/percha.png";

export function CartWidget() {
  const { contadorItems } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  return (
    <>
      <Link to="/Cart">
        {cart.length ? (
          <span className="contadorCarrito">
            <b> {contadorItems()} </b>
          </span>
        ) : (
          ""
        )}
        <img className="imginicio" src={percha} alt="percha" />
      </Link>
    </>
  );
}
