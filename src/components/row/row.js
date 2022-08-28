import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./row.scss";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const base_Url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, largeRow, largeRowContainer }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
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

  return (
    <div className={`row ${largeRowContainer && "row__large-container"}`}>
      <h2 className="row__title">{title}</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={5.3}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        loop={true}
        on={{
          slideChange: function () {
            console.log("1");
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide className="row__slide">
            {largeRow && (
              <img
                src={require(`../../img/top_icon.png`)}
                alt="Movie Number"
                className="row__number"
              />
            )}

            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__item ${largeRow && "row__item--large"}`}
              src={`${base_Url}${
                largeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
