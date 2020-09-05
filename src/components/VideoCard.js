import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const VideoCard = forwardRef(({ movie }, ref) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${imageBaseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt="dog"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="…"
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} _`}
        {movie.release_date || movie.first_air_date} *
        <ThumbUpIcon /> {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
