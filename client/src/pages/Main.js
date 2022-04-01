import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TypeBar } from "../components/TypeBar";
import { BrandBar } from "../components/BrandBar";

const Main = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={3}>
          <TypeBar />
        </Col>

        <Col md={9}>
          <BrandBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
