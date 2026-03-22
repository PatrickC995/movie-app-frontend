import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});

  // Load favorites and ratings from localStorage on mount
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    const storedRatings = localStorage.getItem("ratings");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
    if (storedRatings) setRatings(JSON.parse(storedRatings));
  }, []);

  // Save favorites and ratings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [favorites, ratings]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const getRating = (movieId) => {
    return ratings[movieId] || 0;
  };

  const setRating = (movieId, rating) => {
    setRatings((prev) => ({ ...prev, [movieId]: rating }));
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    getRating,
    setRating,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
