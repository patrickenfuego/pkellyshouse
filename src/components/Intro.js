import React from "react";
import { Jumbotron, Card, Button, Container } from "react-bootstrap";

const Intro = (props) => {
  return (
    <div className="tab-container">
      <div className="inner-container">
        <div className="intro-tab">
          <Jumbotron className="jumbotron-custom">
            <h1>Welcome to my site!</h1>
            <h4>
              My name is <strong>Patrick Kelly</strong>{" "}
              <img src="/assets/images/pk_logo.png" alt="secondary logo" />
            </h4>
            <p>
              {" "}
              and I am an experienced IT professional with a{" "}
              <strong>passion for learning new skills</strong>. From software
              engineering to cybersecurity, I am always striving to better my
              understanding of technology and use it in new and inventive ways.{" "}
            </p>
            <p>
              Feel free to browse my site and learn a bit more about my
              interests, skills, and professional experience.
            </p>
          </Jumbotron>
          <h2>Current Tech Interests</h2>
          <Container fluid="xs">
            <Card className="card-style">
              <Card.Img
                variant="top"
                src="/assets/images/logo512.png"
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Intro;

// I am an IT professional who loves a challenge; I am always striving
//             to better my understanding of technology. From software engineering
//             to network infrastructure, I am always looking to{" "}
//             <strong>learn something new</strong>.
