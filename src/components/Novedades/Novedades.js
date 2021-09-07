import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Novedades = ({ items }) => {
  useEffect(() => {
    localStorage.setItem("itemsNovedades", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <h2 id="productos" className="tituloProductos">
        NOVEDADES
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
                  <Link className="detalles" to={`/product/${item.id}`}>
                    <Button
                      role="link"
                      type="button"
                      variant="primary"
                      title="Ver detalles"
                      className="detalles"
                    >
                      Ver {item.estado}
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
};
