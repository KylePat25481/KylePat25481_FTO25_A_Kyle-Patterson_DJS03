import { createContext, useState, useEffect } from "react";
import { getGenreNames } from "../utils/GenreService.js";

export const PodcastContext = createContext();

export function PodcastProvider({ children }) {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPodcasts() {
      try {
        const res = await fetch("https://podcast-api.netlify.app/");
        if (!res.ok) throw new Error("Failed to fetch podcasts");

        const data = await res.json();

        // Map genre IDs to names
        const podcastsWithGenres = data.map((podcast) => ({
          ...podcast,
          genreNames: getGenreNames(podcast.genre_ids),
        }));

        setPodcasts(podcastsWithGenres);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPodcasts();
  }, []);

  return (
    <PodcastContext.Provider
      value={{
        podcasts,
        loading,
        error,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
}
