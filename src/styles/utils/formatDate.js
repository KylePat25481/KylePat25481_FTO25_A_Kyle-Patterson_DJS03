// src/utils/formatDate.js

import { formatDistanceToNow, parseISO } from "date-fns";

/**
 * Formats an ISO date string into a “relative time ago” string.
 * E.g. “3 days ago”, “2 months ago”
 * @param {string} isoDate - The ISO formatted date string.
 * @returns {string} Relative time string.
 */
export function formatDateAgo(isoDate) {
  try {
    const date = parseISO(isoDate);
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (e) {
    console.error("Error parsing date:", isoDate, e);
    return "";
  }
}
