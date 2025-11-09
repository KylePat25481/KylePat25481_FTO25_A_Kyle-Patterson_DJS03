import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import PodcastGrid from "./components/PodcastGrid.jsx";
import "./index.css";

/**
 * App Component
 * Fetches podcasts from API and renders header + grid
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [genres, setGenres] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPodcasts() {
      try {
        const [podcastRes, genreRes] = await Promise.all([
          fetch("https://podcast-api.netlify.app/"),
          fetch("https://podcast-api.netlify.app/genres")
        ]);

        if (!podcastRes.ok || !genreRes.ok) throw new Error("Failed to fetch data");

        const podcastData = await podcastRes.json();
        const genreData = await genreRes.json();

        // Convert array of genre objects into map for easier lookup
        const genreMap = {};
        genreData.forEach((g) => {
          genreMap[g.id] = g.title;
        });

        setPodcasts(podcastData);
        setGenres(genreMap);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPodcasts();
  }, []);

  if (loading) return <p className="status">Loading podcasts...</p>;
  if (error) return <p className="status error">{error}</p>;
  if (podcasts.length === 0) return <p className="status">No podcasts found.</p>;

  return (
    <div>
      <Header />
      <PodcastGrid podcasts={podcasts} genres={genres} />
    </div>
  );
}
