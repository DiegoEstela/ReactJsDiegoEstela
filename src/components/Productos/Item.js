import "./Item.css";
import "../Apis/ItemList";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import productos from "../Apis/ItemList";

export function Item() {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    setCounter(counter === 0 ? 0 : counter - 1);
  };

  return (
    <div>
      <h2 id="productos" className="tituloProductos">
        PRODUCTOS
      </h2>
      <div className="prodContainer">
        {productos.map((item) => (
          <div>
            <Card className="cardPrud " style={{ width: "14rem" }}>
              <Card.Img className="cardImg" src={item.imagen} />
              <Card.Body>
                <Card.Title key={item.id}>{item.nombre}</Card.Title>
                <Card.Text>Contador : {counter}</Card.Text>
                <Card.Footer className="cardFooter">
                  <Button onClick={sumar} variant="primary">
                    Aguegar
                  </Button>
                  <Button onClick={restar} variant="primary">
                    Quitar
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
