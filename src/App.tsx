import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import VectorLogo from "./images/Robots & Things Logo - Vector Version.png";
import About from "./components/page-components/About/About";

function App() {
  return (
    <div className="App">
      <title>Robots & Things - By Plasma Shadow Studios</title>
      <Header
        headerLinks={["/about", "/updates", "/demo"]}
        headerNames={["About", "Updates", "Demo"]}
      />
      <Routes>
        <Route
          path="/"
          element={<img src={VectorLogo} className="logo" alt="logo" />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
