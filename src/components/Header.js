import React from "react";
import "../App.scss";

import { Container } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";

const Header = () => {
  return (
    <Container fluid="true">
      <header className="page-header">
        <CustomNavbar />
      </header>
    </Container>
  );
};

export default Header;
