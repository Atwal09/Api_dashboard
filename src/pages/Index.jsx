import { Link } from "react-router-dom";
import { CloudSun, Film, Music, Database, Globe } from "lucide-react";

const cards = [
  { title: "Weather", desc: "City weather", icon: CloudSun, to: "/weather" },
  { title: "Movies", desc: "Movie search", icon: Film, to: "/movies" },
  { title: "Music", desc: "Song search", icon: Music, to: "/music" },
  { title: "Countries", desc: "Explore countries data", icon: Globe, to: "/countries" }, // ✅ comma added
  { title: "JSON Data", desc: "User list", icon: Database, to: "/json-data" },
];

export default function Index() {
  return (
    <div className="page">
      <h1 style={{ textAlign: "center", marginBottom: 40 }}>
        API Dashboard
      </h1>

      <div className="dashboard">
        {cards.map((c) => (
          <Link key={c.title} to={c.to}>
            <div className="card">
              <c.icon size={28} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <span>Explore →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}