import { React, useEffect, useState } from "react";
import productos from "../Apis/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";

export function ItemDetailContainer() {
  const [ProdDetail, setProd] = useState([]);

  useEffect(() => {
    const task = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });

    task().then((data) => setProd(data));
  }, []);

  return <ItemDetail ItemDetail={ProdDetail} />;
}
