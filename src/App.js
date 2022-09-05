import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import ChopmoneyStory from "./components/chopmoneyStory";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/the-chopmoney-story" element={<ChopmoneyStory />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
