import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import "../css/index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login/",
        user
      );
      console.log(response.data);
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="jersey-10-regular title-form-login">SunquMedic</h2>
        <form className="form-content" onSubmit={handleSubmit}>
          <h5>Iniciar Sesión</h5>
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="prima-btn">Iniciar Sesión</button>
          <button
            type="button"
            className="outlined secon-btn"
            onClick={handleRegisterRedirect}
          >
            ¿Aun no tienes una cuenta? registrate ahora
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
