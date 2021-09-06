import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
import { Button } from "react-bootstrap";

const DatosCompras = () => {
  const { UserInfo, OrdenId } = useContext(UserContext);
  const { vaciarCarro } = useContext(CartContext);
  const { nombre, email } = UserInfo;

  return (
    <div className="bodyCarrito">
      <div className="datosComprasContainer">
        <p className="datosCompras">
          Gracias <b> {nombre} </b>por tu compra !! te dejamos el numero de ID
          de tu compra para seguir el paquete.{""}
          <span className="ordenId"> {OrdenId}</span>
        </p>

        <Button className="btnDatosCompras" onClick={vaciarCarro}>
          Finalizar
        </Button>
      </div>
    </div>
  );
};

export default DatosCompras;
