import React, { useContext } from "react";
import "./Home.css";
import percha from "../../img/percha.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export function Home() {
  const { contadorItems } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  return (
    <div className="containerHome" id="inicio">
      <h1 className="titulo">NBP Estudio</h1>
      <h2 className="h2Inicio">design</h2>

      <Link to="/Cart">
        {cart.length ? (
          <span className="contadorCarrito">
            {" "}
            <b>{contadorItems()} </b>
          </span>
        ) : (
          ""
        )}
        <img className="imginicio" src={percha} alt="percha" />
      </Link>
    </div>
  );
}
