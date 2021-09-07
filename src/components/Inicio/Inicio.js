import React from "react";
import "../Inicio/Inicio.css";
import barbijoUno from "../../img/productos/BarbijosCuero/barbijosCueroUno.JPG";
import barbijoDos from "../../img/productos/BarbijosCuero/barbijosCueroDos.JPG";
import design from "../../img/design.JPG";
import modelo from "../../img/modelo.JPG";
export const Inicio = () => {
  return (
    <div className="containerNovedades" id="novedades">
      <h3 className="h3Novedades">CUERO</h3>
      <img className="imgUno" src={barbijoUno} alt="imguno" />
      <img className="imgDos" src={barbijoDos} alt="imgDos" />
      <img className="design" src={design} alt="design" />
      <img className="modelo" src={modelo} alt="modelo" />
    </div>
  );
};
