import React from "react";
import { Tabs, Tab } from "react-bootstrap";

// eslint-disable-next-line no-unused-vars
import Intro from "./Intro";

const cardArray = [
  {
    img: "/assets/images/logo512.png",
    alt: "ReactJS",
    title: "ReactJS",
    body:
      "React is one of the hottest web dev libraries on the planet right now, and with no signs of slowing down, it seemed like a good choice for my first website. It's also extremely sought after in the job market, which doesn't hurt.",
    link: "stuff"
  },
  {
    img: "/assets/images/powershell.png",
    alt: "PowerShell",
    title: "PowerShell",
    body:
      "PowerShell is something I needed to learn for my current job as a Windows Security Admin. I used to hate it, but in the last few months I've learned to appreciate how truly powerful it is (once I got past the weird syntax).",
    link: "stuff"
  },
  {
    img: "/assets/images/azureAD.png",
    alt: "Azure Active Directory",
    title: "Azure Active Directory",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "stuff"
  },
  {
    img: "/assets/images/spring_logo.png",
    alt: "Some alt text",
    title: "Card Title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "stuff"
  },
  {
    img: "/assets/images/python.png",
    alt: "Some alt text",
    title: "Card Title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "stuff"
  },
  {
    img: "/assets/images/metasploit.png",
    alt: "Some alt text",
    title: "Card Title",
    body:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "stuff"
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
