import { useState, useEffect } from "react";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import SearchBox from "../../components/search-box/search-box";
import requests from "../../requests";

import "../../components/search-box/search-box.scss";
import CardList from "../../components/card-list/card-list";

function Search() {
  const [searchField, setSearchField] = useState("");
  const [movies, setMovies] = useState([]);

  const [filteredMovies, setFilterMovies] = useState(movies);

  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/trending/all/week?api_key=ab0c09b02d5334c9495393040836630f&language=en-US"
  //   )
  //     .then((response) => response.json())
  //     .then((users) => setMovies(users));
  // }, []);

  useEffect(() => {
    const newFilteredMovies = movies.filter((movie) => {
      return movie.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMovies(newFilteredMovies);
  }, [movies, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="">
      <Nav />
      <div className="search-box">
        <h1 className="search-box__title">Search</h1>
        <SearchBox
          placeholder="Search movie"
          onChangeHandler={onSearchChange}
        />
      </div>
      <CardList fetchUrl={requests.fetchTrending} movies={filteredMovies} />
      <Footer />
    </div>
  );
}

export default Search;
