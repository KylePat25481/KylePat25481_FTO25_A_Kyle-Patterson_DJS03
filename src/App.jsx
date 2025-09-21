// src/App.jsx

import React, { useState, useEffect } from "react";
import PodcastGrid from "./components/PodcastGrid";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import { genres } from "./data/genres";
import "./styles/App.css";

/**
 * Root component. Fetches podcast data and handles loading / error states.
 * @returns {JSX.Element}
 */
function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")  // replace path if endpoint differs
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!data || data.length === 0) {
          setError("No podcasts found.");
        } else {
          setPodcasts(data);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to fetch podcasts.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Podcast Discovery</h1>
      </header>

      {loading && <Loading />}

      {error && !loading && <ErrorMessage message={error} />}

      {!loading && !error && podcasts.length > 0 && (
        <PodcastGrid podcasts={podcasts} genresList={genres} />
      )}
    </div>
  );
}

export default App;
