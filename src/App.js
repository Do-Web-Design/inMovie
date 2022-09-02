import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/homePage";
import CommingSoon from "./routes/comingSoon/comingSoon";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="comingSoon" element={<CommingSoon />} />
      </Routes>
    </Router>
  );
};

export default App;
