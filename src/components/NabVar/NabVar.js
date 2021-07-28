import React from "react";
import "./NabVar.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"

export const NabVar = () => {
  return (
    <div className='NavBar'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NBPestudio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Novedades</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Producto 1</NavDropdown.Item>
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
}
