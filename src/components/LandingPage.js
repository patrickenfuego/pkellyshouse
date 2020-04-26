import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";

const LandingPage = (props) => {
  return (
    <body className="landing-area">
      <div className="landing-content">
        <h1>{props.title}</h1>
        <h4>{props.subTitle}</h4>
        <Container className="carousel">
          <Row className="justify-content-md-center">
            <Col lg="auto">
              <Carousel>
                {props.pics.map((item, index) => (
                  <Carousel.Item key={index}>
                    <img src={item.pic} alt={item.alt} />
                    <Carousel.Caption key={index}>
                      <p>{item.caption}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </body>
  );
};

export default LandingPage;

// <Carousel.Item>
//   <img src="/carousel1.png" alt="First slide" />
//   <Carousel.Caption>
//     <p>Come see how good I look 😎</p>
//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <img src="/carousel2.jpg" alt="Second slide" />
//   <Carousel.Caption>
//     <p>My niece, Maya Papaya</p>
//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <img src="/carousel3.png" alt="Third slide" />
//   <Carousel.Caption>
//     <p>I'm kind of a big deal...</p>
//   </Carousel.Caption>
// </Carousel.Item>
