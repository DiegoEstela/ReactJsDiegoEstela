import "../Apis/ItemList";
import { React, useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import productos from "../Apis/ItemList";

export function ItemListContainer() {
  const [Prod, setProd] = useState([]);
  const [Load, setLoad] = useState(true);

  useEffect(() => {
    const task = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
          setLoad(false);
        }, 3000);
      });

    task().then((data) => setProd(data));
  }, []);

  return <ItemList items={Prod} Load={Load} />;
}
