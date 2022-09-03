import React from "react";
import Appinfo from "./components/appinfo";
import Faq from "./components/faq";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Appinfo />
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
