import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import { Novedades } from "./Novedades";

export const ListNovedades = () => {
  const [novedades, setnovedades] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const Novedad = itemCollection.where("estado", "==", "novedad");
    Novedad.get().then((querySnapshot) =>
      setnovedades(querySnapshot.docs.map((document) => document.data()))
    );
  }, []);
  return <Novedades items={novedades} />;
};
