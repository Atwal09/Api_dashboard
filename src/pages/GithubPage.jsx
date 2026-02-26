import { useState } from "react";
import { Github, Star } from "lucide-react";

export default function GithubPage() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

 const search = async () => {
  if (!username.trim()) return;

  setError("");
  setUser(null);
  setRepos([]);

  try {
    const userRes = await fetch(
      `https://api.github.com/users/${username.trim()}`
    );

    const userData = await userRes.json();

    if (userData.message === "Not Found") {
      setError(`User "${username}" does not exist on GitHub`);
      return;
    }

    setUser(userData);

    const repoRes = await fetch(userData.repos_url);
    const repoData = await repoRes.json();
    setRepos(repoData);

  } catch (err) {
    setError("Network error. Try again.");
  }
};

  return (
    <div className="page">
      <div className="page-header">
        <Github />
        <h1>GitHub Explorer</h1>
      </div>

      <div className="search-bar">
        <input
          placeholder="Enter GitHub username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>

      <p style={{ opacity: 0.6, marginTop: 8 }}>
  Example: octocat, torvalds, gaearon
</p>

      {error && <p style={{ color: "tomato" }}>{error}</p>}

      {user && (
        <div className="card" style={{ marginBottom: 30 }}>
          <div style={{ display: "flex", gap: 20 }}>
            <img
              src={user.avatar_url}
              alt="avatar"
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
              }}
            />
            <div>
              <h2>{user.name || user.login}</h2>
              <p>{user.bio}</p>
              <p>👥 {user.followers} followers</p>
              <p>📦 {user.public_repos} repos</p>
            </div>
          </div>
        </div>
      )}

      {repos.length > 0 && (
        <div>
          <h3 style={{ marginBottom: 15 }}>Repositories</h3>
          {repos.slice(0, 6).map((repo) => (
            <div key={repo.id} className="card" style={{ marginBottom: 12 }}>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>
              <p>
                <Star size={14} /> {repo.stargazers_count} · {repo.language}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}