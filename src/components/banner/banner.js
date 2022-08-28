import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";

import requests from "../../requests";

import "./banner.scss";
import "../button/button.scss";

function Banner() {
  const [movie, setMovie] = useState([]);

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

  // console.log(movie);

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
          <Link to="/comingSoon">
            <button className="button button__red banner__button-play">
              <div className="banner__button-play--icon"></div>
              Play
            </button>
          </Link>

          <Link to="/comingSoon">
            <button className="button button__light">See more</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Banner;
