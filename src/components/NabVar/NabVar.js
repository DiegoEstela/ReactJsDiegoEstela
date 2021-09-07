import React from "react";
import "./NabVar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { CartWidget } from "./CartWidget.js";
import { Link } from "react-router-dom";

export const NabVar = () => {
  return (
    <div className="NavBar">
      <Navbar bg="light" expand="lg">
        <Container className="containerNav">
          <Navbar.Brand>
            <Link className="li" to="/">
              <CartWidget />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="li" to="/">
                  Inicio
                </Link>
              </Nav.Link>
              <Nav.Link className="li" to="/Novedades">
                <Link className="li" to="/Novedades">
                  Novedades
                </Link>
              </Nav.Link>
              <Nav.Link className="li" to="/ItemList">
                <Link className="li" to="/ItemList">
                  Barbijos
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
