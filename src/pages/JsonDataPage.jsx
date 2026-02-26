import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import SearchInput from "../components/SearchInput";
import { Database } from "lucide-react";

export default function JsonDataPage() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(r => r.json())
      .then(setUsers);
  }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen px-6 py-12">
      <PageHeader title="JSON Data" icon={Database} />

      <SearchInput
        value={query}
        onChange={setQuery}
        onSubmit={() => {}}
        placeholder="Search users..."
      />

      {filtered.map(user => (
        <div key={user.id} className="glass-card p-4 mb-3">
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-sm opacity-70">{user.email}</p>
        </div>
      ))}
    </div>
  );
}