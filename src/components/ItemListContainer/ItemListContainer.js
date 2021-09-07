import "../Apis/ItemList";
import { React, useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getFirestore } from "../../firebase";

export function ItemListContainer() {
  const [Prod, setProd] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No items");
      }
      setLoading(false);
      setProd(querySnapshot.docs.map((document) => document.data()));
    });
  }, []);
  return <ItemList items={Prod} Loading={Loading} />;
}
