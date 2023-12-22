import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/project-section/Projects";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contact/ContactUs";
import About from "./components/about/about";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
