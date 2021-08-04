import React from "react";
import imagen from "../../img/logoNav.png";
import "./NabVar.css";

export function CartWidget() {
  return (
    <div>
      <span>
        <img className="cartWidget" src={imagen} alt="logo" />
      </span>
    </div>
  );
}
