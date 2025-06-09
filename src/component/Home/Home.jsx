import React from "react";
import "./home.css";
import man from "../../assets/man.png";
import TypingEffect from "react-typing-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line2", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line3", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0,
    });
  });
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">ROHIT PRAJAPATI </div>
          <div className="line3">
            WEB DEVELOPER
            {/* <TypingEffect
              text={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "EDITOR"]}
              speed={500}
              eraseSpeed={500}
              eraseDelay={1000}
              typingDelay={50}
              cursor="_"
            /> */}
          </div>
          <button>HERE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="image" />
      </div>
    </div>
  );
}

export default Home;
