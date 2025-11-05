import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./Pagination.module.css";

/**
 * @component Pagination
 * @description Handles paging through podcasts.
 */
export function Pagination() {
  const { currentPage, setCurrentPage, totalPages } =
    useContext(PodcastContext);

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
