import { useState } from "react";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);

  const search = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?t=${query}&apikey=b6003d8a`
    );
    const data = await res.json();
    setMovie(data);
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>Movies</h1>
      </div>

      <div className="search-bar">
        <input
          placeholder="Search movie..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>

      {movie && movie.Title && (
        <div className="card movie-card">
          <img src={movie.Poster} />
          <div>
            <h2>{movie.Title}</h2>
            <p>{movie.Genre}</p>
            <p>{movie.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
}