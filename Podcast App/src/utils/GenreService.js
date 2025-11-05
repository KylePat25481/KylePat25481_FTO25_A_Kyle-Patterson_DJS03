/**
 * @file GenreService.js
 * @description Utility to map genre IDs to their names.
 */

// Genre mapping based on podcast API docs
export const GENRES = {
  1: "Personal Growth",
  2: "Investigative",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Music",
  10: "Kids & Family",
  11: "Science",
  12: "Sports",
  13: "True Crime",
};

/**
 * @function getGenreNames
 * @param {number[]} ids - List of genre IDs.
 * @returns {string[]} Array of genre names.
 */
export function getGenreNames(ids = []) {
  return ids.map((id) => GENRES[id] || "Unknown");
}
