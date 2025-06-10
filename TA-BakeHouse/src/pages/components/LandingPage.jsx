import React from "react";
import Home from "./Home";
import About from "./About";
import Contactus from "./Contactus";
const LandingPage = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contactus">
        <Contactus />
      </section>
    </>
  );
};
export default LandingPage;
