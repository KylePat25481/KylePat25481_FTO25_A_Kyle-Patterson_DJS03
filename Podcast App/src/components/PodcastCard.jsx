import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import { formatDate } from "../utils/formatDate";
import { getGenreNames } from "../utils/GenreService";
import styles from "./PodcastCard.module.css";

export function PodcastCard({ podcast }) {
  const { setSelectedPodcast } = useContext(PodcastContext);
  const { image, title, seasons, genres, updated } = podcast;
  const genreNames = getGenreNames(genres);

  return (
    <article className={styles.card} onClick={() => setSelectedPodcast(podcast)}>
      <img src={image} alt={`${title} podcast cover`} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.meta}>{seasons} Seasons</p>
        <p className={styles.genres}>{genreNames.join(", ")}</p>
        <p className={styles.date}>Last updated {formatDate(updated)}</p>
      </div>
    </article>
  );
}
