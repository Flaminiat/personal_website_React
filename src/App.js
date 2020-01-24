import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./mycomps/services";
import AboutMe from "./mycomps/aboutme";
import Intro from "./mycomps/intro";
import MainNav from "./mycomps/mainnav";
import Portfolio from "./mycomps/portfolio";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNav />
      </header>

      <main>
        <Intro />
        <AboutMe />
        <Portfolio />
        <Services />
      </main>
    </div>
  );
}

export default App;
