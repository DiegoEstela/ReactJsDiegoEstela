import React, { useState } from "react";
import "./NabVar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { CartWidget } from "./CartWidget.js";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const NabVar = () => {
  const [Error, setError] = useState("");

  const { currentUser, logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(Error);
      setError("server error");
    }
  };
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
              {currentUser ? (
                <Nav.Link className="li" onClick={handleLogout}>
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                    alt="user"
                    className="userImg"
                  />
                  <span className="User"> {currentUser.email}</span>
                </Nav.Link>
              ) : (
                <Nav.Link className="li">
                  <Link className="li" to="/Login">
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
                      alt="user"
                      className="userImgIniciar"
                    />
                    <span className="User"> iniciar sesion</span>
                  </Link>
                </Nav.Link>
              )}

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
