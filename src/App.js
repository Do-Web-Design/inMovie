import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/homePage";
import CommingSoon from "./routes/comingSoon/comingSoon";

const App = () => {
  return (
    <div>
      <h1>test</h1>
      <Routes>
        <Route index path="home" element={<Home />} />
        <Route path="comingSoon" element={<CommingSoon />} />
      </Routes>
    </div>
  );
};

export default App;
