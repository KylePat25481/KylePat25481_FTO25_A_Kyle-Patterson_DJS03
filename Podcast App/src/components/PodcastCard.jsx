import React from "react";
import { formatDate } from "../utils/formatDate.js";
import styles from "./PodcastCard.module.css";

/**
 * PodcastCard Component
 * Displays a single podcast preview
 */
export default function PodcastCard({ podcast, genres }) {
  const formattedDate = podcast.updated
    ? formatDate(podcast.updated)
    : "Unknown date";

  return (
    <div className={styles.card}>
      <img
        src={podcast.image}
        alt={podcast.title}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.details}>
        <h3 className={styles.title}>{podcast.title}</h3>
        <p className={styles.seasons}>{podcast.seasons} Season(s)</p>

        <div className={styles.genreContainer}>
          {podcast.genres?.map((genreId, index) => (
            <span key={index} className={styles.genreBadge}>
              {genres[genreId] || "Unknown"}
            </span>
          ))}
        </div>

        <p className={styles.updated}>Updated {formattedDate}</p>
      </div>
    </div>
  );
}
