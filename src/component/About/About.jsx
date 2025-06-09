import React from "react";
import "./about.css";
import Card from "../Card/Card";
import MERN from "../../assets/mern.png";
import JAVA from "../../assets/java.png";
import DSA from "../../assets/dsa.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,

      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,
        start: "top 50%",
        end: "top 20%",
      },
    });
    gsap.from(".aboutDetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutDetails h1",
        scroll: "body",
        scrub: 2,
        start: "top 50%",
        end: "top 20%",
      },
    });
    gsap.from(".aboutDetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutDetails ul",
        scroll: "body",
        scrub: 2,
        start: "top 50%",
        end: "top 20%",
      },
    });
    gsap.from(".rightabout", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,
        start: "top 50%",
        end: "top 20%",
      },
    });
  });
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutDetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : Rohit
              </li>
              <li>
                <span>AGE</span> : 20
              </li>
              <li>
                <span>GENDER</span> : Male
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : English, Hindi
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : B-TECH
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
              </li>
              <li>
                <span>CGPA</span> : 8.3
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>MERN STACK WEB DEVELOPER</li>
              <li>JAVA</li>
              <li>DSA</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={MERN} />
        <Card title="JAVA" image={JAVA} />
        <Card title="DSA" image={DSA} />
      </div>
    </div>
  );
}

export default About;
