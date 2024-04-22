import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import VectorLogo from "./images/Robots & Things Logo - Vector Version.png";
import About from "./components/page-components/About/About";

const router = createBrowserRouter([
  {
    path: `${process.env.BASE_URL}/`,
    element: <About />,
    errorElement: <p>404 Not Found</p>,
  },
  {
    path: `${process.env.BASE_URL}/about`,
    element: <About />,
    errorElement: <p>404 Not Found</p>,
  },
]);

function App() {
  return (
    <div className="App">
      <title>Robots & Things - By Plasma Shadow Studios</title>
      <img src={VectorLogo} className="logo" alt="logo" />
      <Header
        headerLinks={["/about", "/updates", "/demo"]}
        headerNames={["About", "Updates", "Demo"]}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
