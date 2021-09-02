import React, { useContext, useState } from "react";
import { Form, Row, InputGroup, Col, Button } from "react-bootstrap";
import { getFirestore } from "../../firebase";
import { CartContext } from "../../Context/CartContext";

export const CartForm = () => {
  const { cart, calcularTotal } = useContext(CartContext);
  const [orderCreatedId, setOrderCreatedId] = useState(null);
  const [UserInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  console.log(UserInfo);
  console.log(orderCreatedId);
  const handleChangeUser = (event) => {
    setUserInfo({ ...UserInfo, [event.target.name]: event.target.value });
  };

  const { nombre } = UserInfo;

  const finalizarCompra = (event) => {
    event.preventDefault();
    const newItems = cart.map((item) => ({
      item: {
        id: item.id,
        producto: item.nombre,
        precio: item.precio,
        stock: item.qty,
      },
    }));

    const nuevaOrden = {
      buyer: {
        name: nombre,
        email: "que",
        telefono: "nada",
      },
      items: newItems,
      total: calcularTotal(),
    };
    console.log(nuevaOrden);
    const db = getFirestore();
    const orders = db.collection("orders");
    const batch = db.batch();

    orders.add(nuevaOrden).then((response) => {
      cart.forEach((item) => {
        const docRef = db.collection("items").doc(item.id);
        batch.update(docRef, { stock: item.stock - item.stock });
      });
      batch.commit();
      setOrderCreatedId(response.id);
    });
  };

  return (
    <Form className="form" onSubmit={finalizarCompra}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" name="nombre" />
          <Form.Control.Feedback>Muy Bien!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="telefono" name="telefono" />
          <Form.Control.Feedback>Muy Bien!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor coloca tu Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" placeholder="Direccion" required />
          <Form.Control.Feedback type="invalid">
            Por favor coloca tu direccion.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Localidad</Form.Label>
          <Form.Control type="text" placeholder="Localidad" required />
          <Form.Control.Feedback type="invalid">
            Por favor coloca tu localidad.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control type="text" placeholder="CP" required />
          <Form.Control.Feedback type="invalid">
            Por favor coloca tu CP.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check label="¿Queres recibir nuestras novedades?" />
      </Form.Group>
      <Button type="submit">Finalizar compra</Button>
    </Form>
  );
};