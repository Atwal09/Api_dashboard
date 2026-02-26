import { createBrowserRouter } from "react-router-dom"; // ✅ REQUIRED

import Index from "../pages/Index";
import WeatherPage from "../pages/WeatherPage";
import MoviesPage from "../pages/MoviesPage";
import MusicPage from "../pages/MusicPage";
import GithubPage from "../pages/GithubPage";
import JsonDataPage from "../pages/JsonDataPage";
import NotFound from "../pages/NotFound";
import CountryPage from "../pages/CountryPage";



export const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/weather", element: <WeatherPage /> },
  { path: "/movies", element: <MoviesPage /> },
  { path: "/countries", element: <CountryPage /> },
  { path: "/music", element: <MusicPage /> },
  { path: "/github", element: <GithubPage /> },
  { path: "/json-data", element: <JsonDataPage /> },
  { path: "*", element: <NotFound /> },
]);