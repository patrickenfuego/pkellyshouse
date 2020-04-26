import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  faLinkedin,
  faDiscord,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import CustomNavbar from "./components/CustomNavbar";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
//social media icons
const iconArray = [
  {
    name: "envelope",
    icon: faEnvelope,
    link: "mailto: kelly_patrick89@yahoo.com"
  },
  {
    name: "linkedin",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/patrick-kelly89/"
  },

  {
    name: "github",
    icon: faGithubSquare,
    link: "https://github.com/patrickenfuego"
  },
  {
    name: "discord",
    icon: faDiscord,
    link: "https://discordapp.com/users/patrickenfuego#1090"
  }
];
//carousel pics and captions
const carouselArray = [
  {
    pic: "/assets/images/carousel1.png",
    caption: "Come see how good I look 😎",
    alt: "First Slide"
  },
  {
    pic: "/assets/images/carousel2.jpg",
    caption: "My niece, Maya Papaya",
    alt: "Second Slide"
  },
  {
    pic: "/assets/images/carousel3.png",
    caption: "Sunday Best",
    alt: "Third Slide"
  }
];

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <LandingPage
              title="Welcome to pkellyshouse"
              subTitle="Come learn some stuff about me..."
              pics={carouselArray}
            />
          )}
        />
        <Route exact path="/about" render={(props) => <About />} />
      </Switch>
      <Footer icons={iconArray} />
    </Router>
  );
}

export default App;
