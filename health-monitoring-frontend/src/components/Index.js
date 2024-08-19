import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../css/index.css";

function Index() {
  return (
    <div className="container">
      <div class="ecg-line">
        <div class="ecg-pulse"></div>
      </div>
      <header className="header">
        <h1 className="site-name">SunquMedic</h1>
        <nav className="nav">
          <Link to="/login" className="nav-link">
            Ingresar
          </Link>
          <Link to="/register" className="nav-link">
            Registrarse
          </Link>
        </nav>
        <h1 className="">icon</h1>
      </header>
      <main className="main">
        <h2 className="jersey-10-regular">Bienvenido a</h2>
        <h2 className="jersey-10-regular">la applicación</h2>
        <h2 className="jersey-10-regular">SunquMedic</h2>
      </main>
      <footer className="footer">
        <p>Explora nuestras características y servicios.</p>
        <nav className="btn-started">
          <Link to="/login" className="btn-nav-link">
            Comenzar
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default Index;
