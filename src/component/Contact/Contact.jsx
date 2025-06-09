import React from "react";
import "./Contact.css";
import Con from "../../assets/contact.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function Contact() {
  useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,

      scrollTrigger: {
        trigger: ".leftcontact img",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,

      scrollTrigger: {
        trigger: "form",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
  });
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={Con} alt="image" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/manedvdy" method="post">
          <input name="Username" type="text" placeholder="name" />
          <input name="email" type="email" placeholder="E-mail" />
          <textarea
            name="message"
            id="textarea"
            placeholder="Message me"
          ></textarea>
          <input type="submit" name="" id="btn" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
