import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div>
      <Navbar />
      <SocialLinks/>
      <Hero />
      <About />
      <Experience/>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
