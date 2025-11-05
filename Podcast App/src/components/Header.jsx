import styles from "./Header.module.css";

/**
 * @component Header
 * @description Displays the main app title.
 */
export function Header() {
  return (
    <header className={styles.appHeader}>
      <h1>🎙️ Podcast App</h1>
    </header>
  );
}
