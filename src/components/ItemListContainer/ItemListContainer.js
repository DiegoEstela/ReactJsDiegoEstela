import "../Apis/ItemList";
import { React, useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getFirestore } from "../../firebase";

export function ItemListContainer() {
  const [Prod, setProd] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No items");
      }
      setProd(querySnapshot.docs.map((document) => document.data()));
    });
  }, []);
  return <ItemList items={Prod} />;
}
