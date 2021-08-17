import React from "react";
import { Card, Button } from "react-bootstrap";
import "../ItemList/ItemList.css";

export function ItemList({ items }) {
  console.log(items);
  return (
    <div>
      <h2 id="productos" className="tituloProductos">
        PRODUCTOS
      </h2>
      <div className="prodContainer">
        {items.map((item) => (
          <div>
            <Card className="cardPrud " style={{ width: "14rem" }}>
              <Card.Img className="cardImg" src={item.imagen} />
              <Card.Body>
                <Card.Title key={item.id}> barbijo: {item.nombre}</Card.Title>

                <Card.Footer className="cardFooter">
                  <Button variant="primary">Ver lista de productos</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
