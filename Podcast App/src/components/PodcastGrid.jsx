import React from "react";
import PodcastCard from "./PodcastCard.jsx";
import styles from "./PodcastGrid.module.css";

/**
 * PodcastGrid Component
 * Displays a grid of PodcastCard components
 */
export default function PodcastGrid({ podcasts, genres }) {
  return (
    <section className={styles.gridSection}>
      <div className={styles.grid}>
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
        ))}
      </div>
    </section>
  );
}
