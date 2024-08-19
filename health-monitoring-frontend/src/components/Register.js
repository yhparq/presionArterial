import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/index.css"; // Asegúrate de importar el archivo CSS

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, email, password };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/register/",
        user
      );
      console.log(response.data);
      navigate("/"); // Redirigir al login después del registro
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="jersey-10-regular title-form-login">SunquMedic</h2>
        <form className="form-content" onSubmit={handleSubmit}>
          <h5>Registrarse</h5>
          <div className="input-container">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Correo electrónico"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" className="prima-btn">
            Registrarse
          </button>
          <button
            type="button"
            className="outlined secon-btn"
            onClick={() => navigate("/login")}
          >
            ¿Ya tienes una cuenta? Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
