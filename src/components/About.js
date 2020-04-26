import React from "react";
import { Tabs, Tab } from "react-bootstrap";

// eslint-disable-next-line no-unused-vars
import Intro from "./Intro";

const About = () => {
  return (
    <body className="about-area">
      <Tabs defaultActiveKey="intro" id="uncontrolled-tab-example">
        <Tab eventKey="intro" title="About Me">
          <Intro />
        </Tab>
        <Tab eventKey="resume" title="Resume">
          <p>Some more stuff</p>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <p>Even more stuff</p>
        </Tab>
      </Tabs>
    </body>
  );
};

export default About;
