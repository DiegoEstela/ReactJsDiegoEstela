import React from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ stock, count, onAdd }) => {
  return (
    <div className="count">
      <Button
        className="btnRestar"
        type="button"
        value={-1}
        disabled={count <= 1}
        onClick={onAdd}
        title="Decrement Count"
        aria-label="Decrement Count"
      >
        -
      </Button>
      <span className="numCount">{count}</span>
      <Button
        className="btnSumar"
        type="button"
        value={1}
        disabled={count >= stock}
        onClick={onAdd}
        title="Increment count"
        aria-label="Increment count"
      >
        +
      </Button>
    </div>
  );
};

export default ItemCount;
