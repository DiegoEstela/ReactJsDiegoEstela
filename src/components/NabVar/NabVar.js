import React from "react";
import "./NabVar.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { CartWidget } from "./CartWidget.js";

export const NabVar = () => {
  return (
    <div className="NavBar">
      <Navbar bg="light" expand="lg">
        <Container className="containerNav">
          <Navbar.Brand href="#">
            <CartWidget />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#novedades">Novedades</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Producto 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Producto 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Producto 2
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Producto 3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
