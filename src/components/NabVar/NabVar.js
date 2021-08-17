import React from "react";
import "./NabVar.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
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
              <Nav.Link className="li" href="#novedades">
                Novedades
              </Nav.Link>
              <NavDropdown
                href="#prductos"
                title="Barbijos"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  <Link className="li" to="ItemList">
                    Todos
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link className="li" to="ItemList">
                    Por telas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <Link className="li" to="/diseño">
                    Por Diseño
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Link className="li" to="/ItemDetail">
                    Detalles
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
