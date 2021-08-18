import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                <Card.Title key={item.id}>
                  {" "}
                  barbijo: <br></br>
                  {item.nombre}
                </Card.Title>

                <Card.Footer className="cardFooter">
                  <Link to="/product/:productID">
                    <Button
                      role="link"
                      type="button"
                      variant="primary"
                      title="Ver detalles"
                    >
                      Ver Detalles
                    </Button>
                  </Link>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}