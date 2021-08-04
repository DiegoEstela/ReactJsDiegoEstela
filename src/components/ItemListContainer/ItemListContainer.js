import React from "react";
import "../ItemListContainer/ItemListContainer.css";
import fotoIncioR from "../../img/barbijos.JPG";
import logoIncio from "../../img/logo.png";

export function ItemListContainer() {
  return (
    <div className="containerHome" id="inicio">
      <div className="inicioL">
        <img className="logoInicio" src={logoIncio} alt="logoIncio" />
      </div>
      <div className="inicioR">
        <img className="fotoInicio" src={fotoIncioR} alt="logo" />
      </div>
    </div>
  );
}
