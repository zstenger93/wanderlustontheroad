import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./tailwind.css";

import HomePage from "./components/homepage/HomePage";
import AboutMe from "./components/about/AboutMe";
import Gallery from "./components/album/Gallery";

function App() {
  return (
    <Router basename="/wanderlustontheroad/">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
