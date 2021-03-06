import React, { useContext } from "react";
import "./Cart.css";
import { Table, Button } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

export const CartTable = () => {
  const { cart, eliminarItem, calcularTotal, vaciarCarro } =
    useContext(CartContext);

  const calculatePrice = (price, qty) => {
    return price * qty;
  };

  const eliminarItemCart = (event) => {
    const productID = event.target.value;
    eliminarItem(productID);
  };

  return (
    <div className="cart">
      <Table striped bordered hover size="sm" className="tablaCarro">
        <thead>
          <tr>
            <th>ID</th>
            <th>MODELO</th>
            <th>PRECIO</th>
            <th>CANTIDAD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {cart.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>{item.qty}</td>
              <td>{calculatePrice(item.precio, item.qty)}</td>
              <td className="eliminar">
                <Button
                  variant="outline-danger"
                  className="btnEliminar"
                  value={item.id}
                  title="Eliminar"
                  onClick={eliminarItemCart}
                >
                  -
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="vaciarCarro">
              <Button onClick={vaciarCarro} variant="outline-danger">
                Vaciar carro
              </Button>
            </td>
            <td colSpan="6">Total: ${calcularTotal()}</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};
