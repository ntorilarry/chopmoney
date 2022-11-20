import React, { useState, useEffect } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import ChopmoneyStory from "./components/chopmoneyStory";
import SquareLoader from "react-spinners/SquareLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex h-[100vh] justify-center bg-black items-center">
          <SquareLoader className="rounded-full"size={50} color={"#ECEC0B"} loading={loading} />
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route
              path="/the-chopmoney-story"
              element={<ChopmoneyStory />}
            ></Route>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
