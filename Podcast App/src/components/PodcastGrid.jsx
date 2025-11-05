import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import { PodcastCard } from "./PodcastCard";
import styles from "./PodcastGrid.module.css";

/**
 * @component PodcastGrid
 * @description Displays a responsive grid of podcast previews.
 */
export function PodcastGrid() {
  const { paginatedPodcasts } = useContext(PodcastContext);

  return (
    <section className={styles.grid}>
      {paginatedPodcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </section>
  );
}
