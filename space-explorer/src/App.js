import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Missions from "./pages/Missions";
import MissionDetails from "./pages/MissionDetails";

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/missions">Missions</Link>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/missions/:id" element={<MissionDetails />} />
      </Routes>
    </div>
  );
}

export default App;
