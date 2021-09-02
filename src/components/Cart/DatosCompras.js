import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const DatosCompras = () => {
  const { UserInfo, OrdenId } = useContext(UserContext);
  const { nombre } = UserInfo;

  return (
    <div>
      Gracias : {nombre} por tu compra el pedido tiene un Id: {OrdenId}
    </div>
  );
};

export default DatosCompras;
