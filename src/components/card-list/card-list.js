import "./card-list.scss";
import "../row/row.scss";
import React, { useState, useEffect } from "react";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Link } from "react-router-dom";

const base_Url = "https://image.tmdb.org/t/p/original/";
const CardList = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="card-list">
      {movies.map((movie) => (
        <img
          key={movie.id}
          onClick={() => handleClick(movie)}
          className="card-list__item"
          src={`${base_Url}${movie.poster_path}`}
          alt={movie.name}
        />
      ))}

      {trailerUrl && 
        <div className="movieCard__popup">
          <YouTube videoId={trailerUrl} opts={opts} className="movieCard__video" />
          <Link to="/" className="movieCard__close-btn"></Link>
        </div>
      }
    </div>
  );
};

export default CardList;
