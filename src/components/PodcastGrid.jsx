// src/components/PodcastGrid.jsx

import React from "react";
import PodcastPreviewCard from "./PodcastPreviewCard";
import PropTypes from "prop-types";

/**
 * Props for PodcastGrid
 * @typedef {object} PodcastGridProps
 * @property {object[]} podcasts - Array of podcast objects fetched from API.
 * @property {object[]} genresList - Array of genre objects (from data.js).
 */

/**
 * Renders a grid of podcast preview cards.
 * @param {PodcastGridProps} props
 * @returns {JSX.Element}
 */
function PodcastGrid({ podcasts, genresList }) {
  /**
   * Given a podcast’s genre IDs (or genre references), return their titles.
   * Assuming API returns a field like `genre_ids` or `genres` that can be mapped.
   * @param {number[]} genreIds
   * @returns {string[]}
   */
  function getGenreNames(genreIds) {
    if (!genreIds || !Array.isArray(genreIds)) return [];
    return genresList
      .filter((g) => genreIds.includes(g.id))
      .map((g) => g.title);
  }

  return (
    <div className="podcast-grid">
      {podcasts.map((pod) => (
        <PodcastPreviewCard
          key={pod.id}
          image={pod.image}                // or the correct field name from API
          title={pod.title}
          seasons={pod.seasons}            // or correct field
          genres={getGenreNames(pod.genre_ids /* or whatever field */)}
          lastUpdated={pod.updated_at /* or equivalent */ }
        />
      ))}
    </div>
  );
}

PodcastGrid.propTypes = {
  podcasts: PropTypes.arrayOf(PropTypes.object).isRequired,
  genresList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PodcastGrid;
