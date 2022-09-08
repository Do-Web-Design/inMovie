import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import MovieCard from "../../components/movieCard/movieCard";

import "../../components/search-box/search-box.scss";

function Search() {
  const API_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover/movie?";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () => {
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
  };

  const searchMovies = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <Nav />
      <form onSubmit={searchMovies}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button type={"submit"}>Search</button>
      </form>
      {searchKey}
      <div className="container">{renderMovies()}</div>

      <Footer />
    </div>
  );
}

export default Search;
