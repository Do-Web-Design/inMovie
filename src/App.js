import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/homePage";
import CommingSoon from "./routes/comingSoon/comingSoon";

const App = () => {
  return (
    <Routes>
      <Route index path="home" element={<Home />} />
      <Route path="comingSoon" element={<CommingSoon />} />
    </Routes>
  );
};

export default App;
