import React from "react";
import { Jumbotron, Card, Button, Container, Row, Col } from "react-bootstrap";

const Intro = (props) => {
  return (
    <div className="tab-container">
      <div className="inner-container">
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
            Feel free to browse my site and learn a bit more about my interests,
            skills, and professional experience.
          </p>
        </Jumbotron>
        <h2 style={{ marginLeft: "32px" }}>Current Tech Interests</h2>
        <Container>
          <Row>
            {props.cards.map((card, index) => (
              <Card
                style={{ width: "18rem", backgroundColor: "white" }}
                key={index}
                className="card-style"
              >
                <Card.Img variant="top" src={card.img} alt={card.alt} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.body}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Intro;

// style={{ width: "18rem" }}

// I am an IT professional who loves a challenge; I am always striving
//             to better my understanding of technology. From software engineering
//             to network infrastructure, I am always looking to{" "}
//             <strong>learn something new</strong>.
