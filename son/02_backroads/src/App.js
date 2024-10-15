import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
