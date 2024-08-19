import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HistoryIcon from "@mui/icons-material/History";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BloodPressureForm from "./BloodPressureForm";
import BloodPressureHistory from "./BloodPressureHistory";
import BloodPressureChart from "./BloodPressureChart";
import InformationSection from "./InformationSection";
import ChallengesSection from "./ChallengesSection";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css"; // Asegúrate de crear este archivo para los estilos

function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("form");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <header className="app-bar">
        <div className="menu-icon">
          <h1 className="title jersey-10-regular">
            SunquMedic Registro de Presión Arterial
          </h1>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          <LogoutIcon />
          Salir
        </button>
      </header>
      <div className="content-sidebar">
        <nav className="sidebar">
          {/* <h2>Presión Arterial</h2> */}
          <ul>
            <li className="fjalla-one-regular" onClick={() => setSelectedSection("form")}>
              <AddBoxIcon />
              Añadir Lectura
            </li>
            <li className="fjalla-one-regular" onClick={() => setSelectedSection("history")}>
              <HistoryIcon />
              Historial
            </li>
            <li className="fjalla-one-regular" onClick={() => setSelectedSection("trends")}>
              <TrendingUpIcon />
              Tendencias
            </li>
            <li className="fjalla-one-regular" onClick={() => setSelectedSection("information")}>
              <InfoIcon />
              Información
            </li>
            <li className="fjalla-one-regular" onClick={() => setSelectedSection("challenges")}>
              <FitnessCenterIcon />
              Retos
            </li>
            <li className="fjalla-one-regular" onClick={handleLogout}>
              <HomeIcon />
              Inicio
            </li>
          </ul>
        </nav>
        <main className="main-content">
          {selectedSection === "form" && <BloodPressureForm />}
          {selectedSection === "history" && <BloodPressureHistory />}
          {selectedSection === "trends" && <BloodPressureChart />}
          {selectedSection === "information" && <InformationSection />}
          {selectedSection === "challenges" && <ChallengesSection />}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
