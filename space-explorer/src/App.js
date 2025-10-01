import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Missions from "./pages/Missions";
import MissionDetails from "./pages/MissionDetails";
import PlanetDetails from "./pages/PlanetDetails";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <nav className="navbar">
        <Link to="/">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/missions">Missions</Link>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/missions/:id" element={<MissionDetails />} />
        <Route path="/planets/:id" element={<PlanetDetails />} />
      </Routes>
    </div>
  );
}
export default App;
