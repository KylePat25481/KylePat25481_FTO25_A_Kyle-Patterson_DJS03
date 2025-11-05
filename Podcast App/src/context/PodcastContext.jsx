import { createContext, useState } from "react";

/**
 * @context PodcastContext
 * @description Provides global state for managing podcasts and pagination.
 */
export const PodcastContext = createContext();

/**
 * @component PodcastProvider
 * @description Context provider for podcasts and pagination.
 * @param {Object} props
 * @param {JSX.Element} props.children - Child components.
 */
export function PodcastProvider({ children }) {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const podcastsPerPage = 12;

  const totalPages = Math.ceil(podcasts.length / podcastsPerPage);

  const paginatedPodcasts = podcasts.slice(
    (currentPage - 1) * podcastsPerPage,
    currentPage * podcastsPerPage
  );

  return (
    <PodcastContext.Provider
      value={{
        podcasts,
        setPodcasts,
        loading,
        setLoading,
        error,
        setError,
        currentPage,
        setCurrentPage,
        totalPages,
        paginatedPodcasts,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
}

// add inside PodcastProvider
const [selectedPodcast, setSelectedPodcast] = useState(null);

<PodcastContext.Provider
  value={{
    podcasts,
    setPodcasts,
    loading,
    setLoading,
    error,
    setError,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedPodcasts,
    selectedPodcast,
    setSelectedPodcast, // added
  }}
>
  {children}
</PodcastContext.Provider>

