import React, { useEffect, useState } from "react";
import { getMissions } from "../api/missions";
import MissionCard from "../components/MissionCard";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import { paginate, sortBy } from "../utils/helpers";
const Missions = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState("launch_year");
  const [sortDirection, setSortDirection] = useState("desc");
  const [filterYear, setFilterYear] = useState("all");
  useEffect(() => {
    async function fetchData() {
      const data = await getMissions();
      setMissions(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  const filteredMissions = missions.filter((m) => {
    const matchesSearch = m.mission_name.toLowerCase().includes(search.toLowerCase());
    const matchesYear = filterYear === "all" || m.launch_year === filterYear;
    return matchesSearch && matchesYear;
  });
  const sortedMissions = sortBy(filteredMissions, sortKey, sortDirection);
  const { pageItems, totalPages } = paginate(sortedMissions, page, 8);
  if (loading) return <Loader />;
  return (
    <div className="app-container">
      <h1>🚀 Space Missions</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="controls">
        <select value={filterYear} onChange={(e) => { setFilterYear(e.target.value); setPage(1); }}>
          <option value="all">All Years</option>
          {[...new Set(missions.map(m => m.launch_year))].map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
          <option value="launch_year">Sort by Year</option>
          <option value="mission_name">Sort by Mission Name</option>
          <option value="rocket.rocket_name">Sort by Rocket</option>
        </select>
        <button onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}>
          {sortDirection === "asc" ? "⬆️ Ascending" : "⬇️ Descending"}
        </button>
      </div>
      <div className="mission-list">
        {pageItems.map((mission) => (
          <MissionCard key={mission.flight_number} mission={mission} />
        ))}
      </div>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>⬅ Prev</button>
        <span> Page {page} of {totalPages} </span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next ➡</button>
      </div>
    </div>
  );
};
export default Missions;
