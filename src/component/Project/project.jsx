import React from "react";
import Card from "../Card/Card";
import "./project.css";
import VA from "../../assets/va.png";
import FB from "../../assets/codeeditor.png";
import CB from "../../assets/cb.png";
import BG from "../../assets/shop.png";
import IG from "../../assets/clg.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  useGSAP(() => {
    gsap.from("#h1", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,

      scrollTrigger: {
        trigger: "#h1",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from(".slider Card", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,

      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
  });
  return (
    <div id="projects">
      <h1 id="h1">1+ YEAR EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card title="VIRTUAL ASISTANT" image={VA} />
        <Card title="HTML,CSS,JS CODE EDITOR " image={FB} />
        <Card title="AI CHATBOT" image={CB} />
        <Card title="SHOPPING WEBSITE" image={BG} />
        <Card title="COLLEGE WEBSITE" image={IG} />
      </div>
    </div>
  );
}

export default Project;
