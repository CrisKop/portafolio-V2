import React, { useEffect } from "react";
import AboutMeComponent from "../components/sections/aboutme/AboutMe";

function AboutMe() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }); // Scroll al inicio de la página en cada cambio de ubicación
    }, 10);
  }, []);

  return (
    <section className="allcontainer">
      <AboutMeComponent />
    </section>
  );
}

export default AboutMe;
