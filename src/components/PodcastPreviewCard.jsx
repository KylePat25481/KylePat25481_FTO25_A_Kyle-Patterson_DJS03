// src/components/PodcastPreviewCard.jsx

import React from "react";
import PropTypes from "prop-types";
import { formatDateAgo } from "../utils/formatDate";

/**
 * Props for PodcastPreviewCard
 * @typedef {object} PodcastPreviewCardProps
 * @property {string} image - The URL of the podcast's image.
 * @property {string} title - Title of the podcast.
 * @property {number} seasons - Number of seasons.
 * @property {string[]} genres - Genre names associated with the podcast.
 * @property {string} lastUpdated - ISO date string for the last update.
 */

/**
 * Renders a card with podcast preview info.
 * @param {PodcastPreviewCardProps} props
 * @returns {JSX.Element}
 */
function PodcastPreviewCard({ image, title, seasons, genres, lastUpdated }) {
  return (
    <div className="podcast-card">
      <img src={image} alt={`Cover art for ${title}`} className="podcast-image" />
      <div className="podcast-info">
        <h3 className="podcast-title">{title}</h3>
        <p className="podcast-seasons">Seasons: {seasons}</p>
        <div className="podcast-genres">
          {genres.map((g) => (
            <span key={g} className="genre-tag">
              {g}
            </span>
          ))}
        </div>
        <p className="podcast-updated">Last updated {formatDateAgo(lastUpdated)}</p>
      </div>
    </div>
  );
}

PodcastPreviewCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  seasons: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  lastUpdated: PropTypes.string.isRequired,
};

export default PodcastPreviewCard;
