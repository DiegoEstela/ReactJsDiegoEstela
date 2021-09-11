import React, { useContext, useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount.js/ItemCount";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function ItemDetail() {
  const [count, setCount] = useState(1);
  const aumentar = (event) => setCount(count + +event.target.value);
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [finalizar, setFinalizar] = useState(false);
  const switchFinalizar = () => setFinalizar(!finalizar);
  const { addProduct } = useContext(CartContext);

  const goToPayment = () => {
    addProduct(item.id, item.nombre, item.precio, count);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    const item = items.find((item) => item.id === id);
    setItem(item);
  }, [id]);
  if (!item)
    return (
      <div className="productoInexistente">
        {" "}
        El producto seleccionado no existe
      </div>
    );
  return (
    <div>
      <h2 id="productos" className="tituloProductos">
        DETALLES
      </h2>
      <div className="prodContainerDetail">
        <div>
          <div className="cardDetail">
            <img className="cardImgDetail" src={item.image} alt="img1" />
            <div className="bodyDetail">
              <h3 className="tituloDetail" key={item.id}>
                {" "}
                Barbijo: <b>{item.nombre}</b>
              </h3>
              <h4>Stock: {item.stock}</h4>

              <h5 className="precio"> Precio: ${item.precio}</h5>
              <p className="descripcion">{item.descripcion}</p>
              <div className="cardFooteruno">
                <div className="agregarAlCarro">
                  {finalizar ? (
                    <Link className="linkDetail" to="/cart">
                      <Button
                        className="linkDetailbtn"
                        title="Agregar al Carro"
                        onClick={goToPayment()}
                      >
                        Agregar al Carro
                      </Button>
                    </Link>
                  ) : (
                    <ItemCount
                      className="btn"
                      stock={item.stock}
                      onAdd={aumentar}
                      count={count}
                    />
                  )}
                </div>
              </div>

              <Button
                className="finalizarPedido"
                variant={finalizar ? "warning" : "success"}
                onClick={switchFinalizar}
                title={finalizar ? "Seguir Comprando" : "Confirmar la compra"}
              >
                {finalizar ? "Seguir Comprando" : "Confirmar la compra"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
