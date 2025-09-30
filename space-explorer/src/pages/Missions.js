import React, { useEffect, useState } from "react";
import { getMissions } from "../api/missions";
import MissionCard from "../components/MissionCard";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";

const Missions = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getMissions();
      setMissions(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredMissions = missions.filter((m) =>
    m.mission_name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;

  return (
    <div className="app-container">
      <h1>🚀 Space Missions</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="mission-list">
        {filteredMissions.map((mission) => (
          <MissionCard key={mission.flight_number} mission={mission} />
        ))}
      </div>
    </div>
  );
};

export default Missions;
