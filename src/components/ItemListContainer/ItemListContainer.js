import React from "react";
import "../ItemListContainer/ItemListContainer.css";
import percha from "../../img/percha.png";

export function ItemListContainer() {
  return (
    <div className="containerHome" id="inicio">
      <h1 className="titulo">NBP Estudio</h1>
      <h2 className="h2Inicio">design</h2>
      <img className="imginicio" src={percha} alt="percha" />
    </div>
  );
}
