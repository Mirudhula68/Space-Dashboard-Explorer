import React from "react";

const planets = [
  { name: "Mercury", img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg", desc: "The smallest planet in our solar system and closest to the Sun." },
  { name: "Venus", img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg", desc: "A hot, cloudy planet often called Earth's twin." },
  { name: "Earth", img: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg", desc: "Our home planet, the only known world with life." },
  { name: "Mars", img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg", desc: "The Red Planet, known for its iron oxide dust." },
  { name: "Jupiter", img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg", desc: "The largest planet, famous for its Great Red Spot." },
  { name: "Saturn", img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg", desc: "Known for its iconic rings made of ice and rock." },
  { name: "Uranus", img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg", desc: "An ice giant with a tilted rotation axis." },
  { name: "Neptune", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg", desc: "A deep blue planet with supersonic winds." }
];

const Dashboard = () => {
  return (
    <div className="app-container">
      <h1>🪐 Planets of Our Solar System</h1>
      <div className="planet-list">
        {planets.map((planet, index) => (
          <div key={index} className="planet-card">
            <img src={planet.img} alt={planet.name} />
            <h2>{planet.name}</h2>
            <p>{planet.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
