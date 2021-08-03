import React from "react";
import imagen from "../../img/logo.png";
import "./NabVar.css";

export function CartWidget() {
    return <div >
        <span>
        <img className="cartWidget"
        
        src={imagen}
      />
        </span>
    </div>;
  }