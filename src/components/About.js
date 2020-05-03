import React from "react";
import { Tabs, Tab } from "react-bootstrap";

// eslint-disable-next-line no-unused-vars
import Intro from "./Intro";

const cardArray = [
  {
    img: "/assets/images/logo512.png",
    alt: "Some alt text",
    title: "Card Title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    img: "/assets/images/powershell.png",
    alt: "Some alt text",
    title: "Card Title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    img: "/assets/images/azureAD.png",
    alt: "Some alt text",
    title: "Card Title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    img: "/assets/images/spring_logo.png",
    alt: "Some alt text",
    title: "Card Title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    img: "/assets/images/pk_logo.png",
    alt: "Some alt text",
    title: "Card Title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    img: "/assets/images/pk_logo.png",
    alt: "Some alt text",
    title: "Card Title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
];

const About = () => {
  return (
    <div className="about-area">
      <Tabs defaultActiveKey="intro" id="uncontrolled-tab-example">
        <Tab eventKey="intro" title="About Me">
          <Intro cards={cardArray} />
        </Tab>
        <Tab eventKey="resume" title="Resume">
          <p>Some more stuff</p>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <p>Even more stuff</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default About;
