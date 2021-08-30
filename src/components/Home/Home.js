import React from "react";
import "./Home.css";
import { CartWidget } from "../CartWidget/CartWidget";

export function Home() {
  return (
    <div className="containerHome" id="inicio">
      <h1 className="titulo">NBP Estudio</h1>
      <h2 className="h2Inicio">design</h2>
      <CartWidget />
    </div>
  );
}
