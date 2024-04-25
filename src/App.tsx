import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import About from "./components/page-components/About";
import MainPage from "./components/page-components/MainPage";
import Videos from "./components/page-components/Videos";

function App() {
  return (
    <div className="App">
      <title>Robots And Things - By Plasma Shadow Studios</title>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/updates" element={<About />} />
        <Route path="/screenshots" element={<About />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/demo" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
