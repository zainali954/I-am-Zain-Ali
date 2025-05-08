import React from "react";
import Hero from './components/Hero'
import './App.css'
import Header from "./components/Header";
import About from "./components/About";
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from "./components/Footer";
import IamAvailable from "./components/IamAvailable";

export default function App() {
  return (
    <div className="relative">
      <div className="absolute top-0 z-[-2] h-full w-full bg-zinc-950 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(113,113,122,0.08)_0,rgba(39,39,42,0)_50%,rgba(39,39,42,0)_100%)]"></div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <IamAvailable />
      <Contact />
      <Footer />
    </div>
  );
}
