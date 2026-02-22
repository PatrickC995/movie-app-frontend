const BASE_URL = "http://localhost:8000";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie`);
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  return await response.json();
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search?query=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    throw new Error("Failed to search movies");
  }
  return await response.json();
};