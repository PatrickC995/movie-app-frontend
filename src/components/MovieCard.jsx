import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { useState } from "react";
import StarRating from "./StarRating";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const [rating, setRating] = useState(0);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  function handleRatingChange(newRating) {
    setRating(newRating);
    // TODO: If you want to persist the rating, call a function from your context here
  }

  return (
    <div className="movie-card">
      <button
        className={`favorite-btn ${favorite ? "active" : ""}`}
        onClick={onFavoriteClick}
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay"></div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
      </div>
    </div>
  );
}

export default MovieCard;
