import { useState } from "react";

export default function MusicPage() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);

  const search = async () => {
    const res = await fetch(
      `https://itunes.apple.com/search?term=${query}&media=music&limit=10`
    );
    const data = await res.json();
    setTracks(data.results);
  };

  return (
    <div className="page">
      <h1>Music</h1>

      <div className="search-bar">
        <input onChange={(e) => setQuery(e.target.value)} />
        <button onClick={search}>Search</button>
      </div>

      {tracks.map((t) => (
        <div key={t.trackId} className="music-item">
          <img src={t.artworkUrl100} />
          <div>
            <strong>{t.trackName}</strong>
            <p>{t.artistName}</p>
          </div>
          <audio controls src={t.previewUrl} />
        </div>
      ))}
    </div>
  );
}