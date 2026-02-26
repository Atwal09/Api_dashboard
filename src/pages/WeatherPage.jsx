import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SearchInput from "../components/SearchInput";
import { CloudSun } from "lucide-react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const search = async () => {
    const geo = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    ).then(r => r.json());

    if (!geo.results) return;

    const { latitude, longitude, name } = geo.results[0];

    const weather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    ).then(r => r.json());

    setData({ ...weather.current_weather, city: name });
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <PageHeader title="Weather" icon={CloudSun} />

      <SearchInput
        value={city}
        onChange={setCity}
        onSubmit={search}
        placeholder="Search city..."
      />

      {data && (
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold">{data.city}</h2>
          <div className="text-6xl font-bold text-cyan-400 my-6">
            {Math.round(data.temperature)}°C
          </div>
          <p>Wind: {data.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
}