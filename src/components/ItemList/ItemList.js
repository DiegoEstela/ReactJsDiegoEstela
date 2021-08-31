import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import "../ItemList/ItemList.css";

export function ItemList({ items }) {
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h2 id="productos" className="tituloProductos">
        PRODUCTOS
      </h2>
      <div className="prodContainer">
        {items.map((item) => (
          <div>
            <Card className="cardPrud " style={{ width: "14rem" }}>
              <Card.Img className="cardImg" src={item.image} />
              <Card.Body>
                <Card.Title key={item.id}>
                  {" "}
                  Barbijo: <br></br>
                  <b> {item.nombre}</b>
                </Card.Title>

                <Card.Footer className="cardFooter">
                  <Link to={`/product/${item.id}`}>
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
