import { useState } from "react";

function StarRating({ rating, onRatingChange }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${starValue <= (hover || rating) ? "filled" : ""}`}
            onClick={() => onRatingChange(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            {starValue <= (hover || rating) ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
