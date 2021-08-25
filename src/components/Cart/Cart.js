import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Table } from "react-bootstrap";

export default function Cart() {
  const { cart, removeProduct } = useContext(CartContext);

  const calculatePrice = (price, qty) => {
    return price * qty;
  };

  console.log(cart);
  return (
    <div>
      {cart.length ? (
        cart.map((item) => (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>Barbijo: {item.name}</td>
                <td>Otto</td>
                <td>{item.qty}</td>
              </tr>
            </tbody>
          </Table>
        ))
      ) : (
        <h1>No hay items en el carrito</h1>
      )}
    </div>
  );
}
