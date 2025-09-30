import React from "react";
import { Link } from "react-router-dom";

const MissionCard = ({ mission }) => {
  return (
    <div className="mission-card">
      <h2>{mission.mission_name}</h2>
      <p><strong>Year:</strong> {mission.launch_year}</p>
      <p><strong>Rocket:</strong> {mission.rocket.rocket_name}</p>
      <Link to={`/missions/${mission.flight_number}`}>View Details</Link>
    </div>
  );
};

export default MissionCard;
