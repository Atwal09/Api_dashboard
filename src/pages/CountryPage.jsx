import { useState } from "react";
import { Globe } from "lucide-react";

export default function CountryPage() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState(null);
  const [error, setError] = useState("");

  const search = async () => {
    if (!query.trim()) return;

    setError("");
    setCountry(null);

    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${query}?fullText=true`
      );

      if (!res.ok) {
        setError("Country not found");
        return;
      }

      const data = await res.json();
      setCountry(data[0]);
    } catch {
      setError("Network error");
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <Globe />
        <h1>Country Explorer</h1>
      </div>

      <div className="search-bar">
        <input
          placeholder="Search country..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>

      {error && <p style={{ color: "tomato" }}>{error}</p>}

      {country && (
        <div className="card" style={{ marginTop: 20 }}>
          <img
            src={country.flags.svg}
            alt="flag"
            style={{ width: 120, marginBottom: 10 }}
          />
          <h2>{country.name.common}</h2>
          <p>🌍 Region: {country.region}</p>
          <p>🏙 Capital: {country.capital?.[0]}</p>
          <p>👥 Population: {country.population.toLocaleString()}</p>
          <p>🗣 Languages: {Object.values(country.languages || {}).join(", ")}</p>
        </div>
      )}
    </div>
  );
}