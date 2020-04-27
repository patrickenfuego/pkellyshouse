import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";

const Footer = (props) => {
  return (
    <footer className="footer-container">
      <Container fluid="true">
        <Row>
          <Col sm>
            <div className="col-left">
              <h5>Connect</h5>
              <span className="icon-area">
                {props.icons.map((icon, index) => (
                  <a href={icon.link} key={index}>
                    <FontAwesomeIcon
                      key={index}
                      icon={icon.icon}
                      color="white"
                      fixedWidth
                    />
                  </a>
                ))}
              </span>
            </div>
          </Col>
          <Col sm>
            <div className="col-middle">
              <h5>Pages</h5>
              <Nav justify="true" className="flex-column footer-links">
                <div className="page-links">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/">Blog</Nav.Link>
                </div>
                <>
                  <DropdownButton
                    as={ButtonGroup}
                    id="dropdown-button-drop-up"
                    drop="up"
                    variant="secondary"
                    title="Media"
                    className="btn btn-link media-btns"
                  >
                    <Dropdown.Item eventKey="1" href="/movies">
                      Movies
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2" href="/music">
                      Music
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3" href="/games">
                      Video Games
                    </Dropdown.Item>
                  </DropdownButton>
                </>
              </Nav>
            </div>
          </Col>
          <Col sm>
            <div className="col-right">
              <h5>Recent</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="row2-copyright">
            <hr />
            <h6>© 2020 Copyright: Patrick Kelly</h6>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
