import styles from "./Modal.module.css";

/**
 * @component Modal
 * @description Displays podcast details in a modal window.
 */
export function Modal({ podcast, onClose }) {
  if (!podcast) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>

        <img
          src={podcast.image}
          alt={`${podcast.title} cover`}
          className={styles.image}
        />

        <h2 className={styles.title}>{podcast.title}</h2>
        <p className={styles.seasons}>Seasons: {podcast.seasons}</p>
        <p className={styles.genres}>
          Genres: {podcast.genres.map((g) => g).join(", ")}
        </p>
        <p className={styles.description}>{podcast.description}</p>
        <p className={styles.date}>Updated {podcast.updated}</p>
      </div>
    </div>
  );
}
