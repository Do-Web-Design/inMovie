import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import requests from "../../requests";

import "./banner.scss";
import "../button/button.scss";
import "../movieCard/movieCard.scss"

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

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
          // console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          // console.log("urlParamsn" + urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  function truncate(string, number) {
    return string?.length > number
      ? string.substr(0, number - 1) + "..."
      : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundPosition: "center top",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <h1 className="banner__description">{truncate(movie.overview, 250)}</h1>
        <div className="banner__buttons">
      
            <button className="button button__red banner__button-play" onClick={() => handleClick(movie)} >
              <div className="banner__button-play--icon"></div>
              Play
              {trailerUrl && 
                <div className="movieCard__popup">
                <YouTube videoId={trailerUrl} opts={opts} className="movieCard__video" />
                  <Link to="/" className="movieCard__close-btn"></Link>
                </div>}
            </button>
          <Link to="/comingSoon">
            <button className="button button__light">See more</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Banner;
