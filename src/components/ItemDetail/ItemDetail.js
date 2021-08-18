import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount.js/ItemCount";

export default function ItemDetail({ ItemDetail }) {
  const mostrar = ItemDetail.filter((productos) => productos.mostrar === "si");
  const [count, setCount] = useState(1);
  const updateCount = (event) => setCount(count + +event.target.value);

  return (
    <div>
      <h2 id="productos" className="tituloProductos">
        DETALLES
      </h2>
      <div className="prodContainerDeTail">
        {mostrar.map((item) => (
          <div>
            <div className="cardDetail ">
              <img className="cardImgDetail" src={item.imagen} alt="img1" />
              <div className="bodyDetail">
                <h2 className="tituloDetail" key={item.id}>
                  {" "}
                  Barbijo de: <b>{item.nombre}</b>
                </h2>
                <h4>Stock: {item.stock}</h4>

                <h5 className="precio"> Precio: ${item.Precio}</h5>
                <p>{item.descripcion}</p>
                <div className="cardFooteruno">
                  <ItemCount
                    className="btn"
                    stock={item.stock}
                    onAdd={updateCount}
                    count={count}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
