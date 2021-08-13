import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ItemDetail({ ItemDetail }) {
  const mostrar = ItemDetail.filter((productos) => productos.mostrar === "si");
  return (
    <div>
      <h2 id="productos" className="tituloProductos">
        DETALLES
      </h2>
      <div className="prodContainerDetalles">
        {mostrar.map((item) => (
          <div>
            <Card className="cardPrud " style={{ width: "14rem" }}>
              <Card.Img className="cardImg" src={item.imagen} />
              <Card.Body>
                <Card.Title key={item.id}>
                  {" "}
                  Barbijo de: <b>{item.nombre}</b>
                </Card.Title>
                <span> Precio: ${item.Precio}</span>
                <p>{item.descripcion}</p>

                <Card.Footer className="cardFooter">
                  <Button variant="primary">Ver </Button>
                  <Button variant="primary">Agregar</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
