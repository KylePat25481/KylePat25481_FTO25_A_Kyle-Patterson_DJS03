/**
 * @function fetchPodcasts
 * @description Fetches podcasts from the external API.
 * @returns {Promise<Array>} List of podcast objects.
 */
export async function fetchPodcasts() {
  const response = await fetch("https://podcast-api.netlify.app/");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
