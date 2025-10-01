import React from "react";
import { useParams, Link } from "react-router-dom";
const planets = [
  { id: 1, name: "Mercury", img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg", desc: "The smallest planet in our solar system and closest to the Sun.", size: "4,879 km diameter", moons: "0" },
  { id: 2, name: "Venus", img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg", desc: "A hot, cloudy planet often called Earth's twin.", size: "12,104 km diameter", moons: "0" },
  { id: 3, name: "Earth", img: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg", desc: "Our home planet, the only known world with life.", size: "12,742 km diameter", moons: "1" },
  { id: 4, name: "Mars", img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg", desc: "The Red Planet, known for its iron oxide dust.", size: "6,779 km diameter", moons: "2" },
  { id: 5, name: "Jupiter", img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg", desc: "The largest planet, famous for its Great Red Spot.", size: "139,820 km diameter", moons: "79+" },
  { id: 6, name: "Saturn", img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg", desc: "Known for its iconic rings made of ice and rock.", size: "116,460 km diameter", moons: "82" },
  { id: 7, name: "Uranus", img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg", desc: "An ice giant with a tilted rotation axis.", size: "50,724 km diameter", moons: "27" },
  { id: 8, name: "Neptune", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg", desc: "A deep blue planet with supersonic winds.", size: "49,244 km diameter", moons: "14" }
];
const PlanetDetails = () => {
  const { id } = useParams();
  const planet = planets.find((p) => p.id === parseInt(id));
  if (!planet) return <p>Planet not found.</p>;
  return (
    <div className="app-container">
      <h1>{planet.name}</h1>
      <img src={planet.img} alt={planet.name} className="planet-image" />
      <p><strong>Description:</strong> {planet.desc}</p>
      <p><strong>Size:</strong> {planet.size}</p>
      <p><strong>Moons:</strong> {planet.moons}</p>
      <Link to="/dashboard">← Back to Planets</Link>
    </div>
  );
};
export default PlanetDetails;
