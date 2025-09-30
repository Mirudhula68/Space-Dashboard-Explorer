import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMissions } from "../api/missions";
import Loader from "../components/Loader";

const MissionDetails = () => {
  const { id } = useParams();
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMission() {
      const data = await getMissions();
      const found = data.find((m) => m.flight_number === parseInt(id));
      setMission(found);
      setLoading(false);
    }
    fetchMission();
  }, [id]);

  if (loading) return <Loader />;

  if (!mission) return <p>Mission not found.</p>;

  return (
    <div className="app-container">
      <h1>{mission.mission_name}</h1>
      <p><strong>Year:</strong> {mission.launch_year}</p>
      <p><strong>Rocket:</strong> {mission.rocket.rocket_name}</p>
      <p><strong>Details:</strong> {mission.details || "No details available"}</p>
      <Link to="/missions">← Back to Missions</Link>
    </div>
  );
};

export default MissionDetails;
