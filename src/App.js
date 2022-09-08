import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/homePage";
import CommingSoon from "./routes/comingSoon/comingSoon";
import Search from "./routes/search/search";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="comingSoon" element={<CommingSoon />} />
        <Route path="search" element={<Search />} />
        <Route index path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
