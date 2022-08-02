import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ChefList from "./ChefList";
import ChefProfile from "./ChefProfile";
import "./ChefSection.css";

export default function ChefSection() {
  const [selected, setSelected] = useState(0);
  const sels = { set: setSelected, sel: selected };
  return (
    <section className="ChefSection">
      <Container>
        <Row className="justify-content-between">
          <Col md={6}>
            <ChefProfile sels={sels} />
          </Col>
          <Col md={5}>
            <ChefList sels={sels} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
