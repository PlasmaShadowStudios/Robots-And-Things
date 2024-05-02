import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import UnderConstruction from "./components/page-components/UnderConstruction";
import MainPage from "./components/page-components/MainPage";
import Videos from "./components/page-components/Videos";
import DemoPage from "./components/page-components/DemoPage";
import UpdatesPage from "./components/page-components/UpdatesPage";

function App() {
  return (
    <div className="App">
      <title>Robots And Things - By Plasma Shadow Studios</title>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/screenshots" element={<UnderConstruction />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </div>
  );
}

export default App;
