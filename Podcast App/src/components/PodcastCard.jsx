import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import { formatDate } from "../utils/formatDate";
import { getGenreNames } from "../utils/GenreService";
import styles from "./PodcastCard.module.css";

/**
  * @param {Object} props
 * @param {Object} props.podcast - The podcast data object to display.
 * @param {string} props.podcast.id - Unique ID of the podcast.
 * @param {string} props.podcast.title - Title of the podcast.
 * @param {string} props.podcast.image - URL of the podcast image.
 * @param {number} props.podcast.seasons - Number of seasons available.
 * @param {string} props.podcast.updated - ISO date string for the last update.
 * @param {Array<Object>} props.genres - Array of genre objects for mapping IDs to titles.
 *
 * @returns {JSX.Element} The rendered podcast card component.
 */
export function PodcastCard({ podcast }) {
  const { setSelectedPodcast } = useContext(PodcastContext);
  const { image, title, seasons, genres, updated } = podcast;
  const genreNames = getGenreNames(genres);

  return (
    <article className={styles.card} onClick={() => setSelectedPodcast(podcast)}>
      <img
        src={image}
        alt={`${title} podcast cover`}
        className={styles.image}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.meta}>{seasons} Seasons</p>
        <p className={styles.genres}>{genreNames.join(", ")}</p>
        <p className={styles.date}>Last updated {formatDate(updated)}</p>
      </div>
    </article>
  );
}
