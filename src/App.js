import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/homePage";
import CommingSoon from "./routes/comingSoon/comingSoon";
import SearchPage from "./routes/search/searchPage";
import MoviePage from "./routes/moviePage/moviePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="comingSoon" element={<CommingSoon />} />
        <Route path="moviePage" element={<MoviePage />} />
        <Route path="searchPage" element={<SearchPage />} />
        <Route index path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
