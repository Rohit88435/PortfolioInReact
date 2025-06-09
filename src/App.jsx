import React from "react";
import Nav from "./component/Nav/Nav";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Projects from "./component/Project/project";
import Contact from "./component/Contact/Contact";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
