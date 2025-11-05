import { useEffect, useContext } from "react";
import { PodcastContext } from "./context/PodcastContext";
import { fetchPodcasts } from "./api/fetchPodcasts";
import { PodcastGrid } from "./components/PodcastGrid";
import { Pagination } from "./components/Pagination";
import { Header } from "./components/Header";
import styles from "./App.module.css";

/**
 * @component App
 * @description Main application component that fetches podcasts on load and displays them in a responsive grid.
 */
export default function App() {
  const { podcasts, setPodcasts, loading, setLoading, error, setError } =
    useContext(PodcastContext);

  useEffect(() => {
    /**
     * Fetch podcast data from external API on initial load.
     */
    const getPodcasts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPodcasts();
        if (data.length > 0) {
          setPodcasts(data);
        } else {
          setError("No podcasts found.");
        }
      } catch (err) {
        setError("Failed to load podcasts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getPodcasts();
  }, [setPodcasts, setLoading, setError]);

  return (
    <div className={styles.app}>
      <Header />

      {loading && <p className={styles.message}>Loading podcasts...</p>}

      {error && !loading && <p className={styles.error}>{error}</p>}

      {!loading && !error && podcasts.length === 0 && (
        <p className={styles.message}>No podcasts available.</p>
      )}

      {!loading && !error && podcasts.length > 0 && <PodcastGrid />}

      {!loading && !error && podcasts.length > 0 && <Pagination />}
    </div>
  );
}
