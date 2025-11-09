import Header from "./components/Header";
import PodcastGrid from "./components/PodcastGrid";
import { PodcastProvider } from "./context/PodcastContext";
import { genres } from "./data";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Header />
      <PodcastProvider>
        <main className={styles.main}>
          <PodcastGrid genres={genres} />
        </main>
      </PodcastProvider>
    </>
  );
}
