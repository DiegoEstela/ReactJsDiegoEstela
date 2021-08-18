import React from "react";
import "./Home.css";
import percha from "../../img/percha.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="containerHome" id="inicio">
      <h1 className="titulo">NBP Estudio</h1>
      <h2 className="h2Inicio">design</h2>
      <Link to="/Cart">
        <img className="imginicio" src={percha} alt="percha" />
      </Link>
    </div>
  );
}
