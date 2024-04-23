import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./components/page-components/About";
import MainPage from "./components/page-components/MainPage";

function App() {
  return (
    <div className="App">
      <title>Robots & Things - By Plasma Shadow Studios</title>
      <Header
        headerLinks={["/about", "/updates", "/demo", "/screenshots", "/videos"]}
        headerNames={["About", "Updates", "Demo", "Screenshots", "Videos"]}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
