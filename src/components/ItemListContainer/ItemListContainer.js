import "./ItemListContainer.css";
import "../Apis/ItemList";
import { React, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import productos from "../Apis/ItemList";

export function ItemListContainer() {
  const [Prod, setProd] = useState([]);

  useEffect(() => {
    const task = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });

    task().then((data) => setProd(data));
  }, []);

  const novedades = Prod.filter(
    (productos) => productos.Condicion === "novedad"
  );
  return (
    <div>
      <h2 id="productos" className="tituloProductos">
        NOVEDADES
      </h2>
      <div className="prodContainer">
        {novedades.map((item) => (
          <div>
            <Card className="cardPrud " style={{ width: "14rem" }}>
              <Card.Img className="cardImg" src={item.imagen} />
              <Card.Body>
                <Card.Title key={item.id}>{item.nombre}</Card.Title>

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
