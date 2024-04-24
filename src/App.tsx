import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import About from "./components/page-components/About";
import MainPage from "./components/page-components/MainPage";
import Videos from "./components/page-components/Videos";

function App() {
  return (
    <div className="App">
      <title>Robots & Things - By Plasma Shadow Studios</title>
      <Routes>
        <Route path="/Robots-And-Things" element={<MainPage />} />
        <Route path="/Robots-And-Things/about" element={<About />} />
        <Route path="/Robots-And-Things/updates" element={<About />} />
        <Route path="/Robots-And-Things/screenshots" element={<About />} />
        <Route path="/Robots-And-Things/videos" element={<Videos />} />
        <Route path="/Robots-And-Things/demo" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
