import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";

export const SignUp = () => {
  const { signup } = useAuth();

  const [error, setError] = useState("");
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setError("Las contraseñas son diferentes");
      setTimeout(() => setError(""), 2000);
    } else {
      try {
        await signup(email, password);
        history.push("/");
      } catch (error) {
        setError("Server Error");
        setTimeout(() => setError(""), 2000);
      }
    }
  };

  return (
    <div className="bodyLogin">
      <div className="cardLogin">
        <div className="card-header">
          {error && <p className="error">{error}</p>}
          <h1>Crear Usuario</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={handleEmail} />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={handleConfirmPassword}
            />
            <input type="submit" value="Registrarme" />
          </form>
          <p>
            Ya tenes Usuario?{" "}
            <Link className="linkLogin" to="/login">
              Iniciar Sesion
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
