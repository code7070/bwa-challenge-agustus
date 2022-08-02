import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Row, Col, Container, Card, Stack } from "react-bootstrap";
import HeadSection from "../../components/headSection/HeadSection";
import chefList from "../../data/chefList";
import "./ChefSection.css";

const ChefItem = ({ name, location: loc, chefType, sel, set, index }) => {
  const click = () => set(index);
  const isActive = index === sel ? "active" : "";
  return (
    <Card className={`chefRow mb-4 ${isActive}`} onClick={click}>
      <Card.Body>
        <div className="chefType">{chefType}</div>
        <div className="chefName">{name}</div>
        <Stack direction="horizontal" gap={2} className="chefLoc">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{`${loc.city}, ${loc.country}`}</span>
        </Stack>
      </Card.Body>
    </Card>
  );
};

const ChefList = () => {
  const [selected, setSelected] = useState(0);
  const sels = { set: setSelected, sel: selected };
  return (
    <div className="mt-3 mb-5">
      {chefList.map((chef, index) => (
        <ChefItem {...chef} {...sels} index={index} key={chef.name} />
      ))}
    </div>
  );
};

export default function ChefSection() {
  return (
    <section className="ChefSection">
      <Container>
        <Row className="justify-content-between">
          <Col md={5}>One of two columns</Col>
          <Col md={5}>
            <HeadSection
              align="left"
              title="TOP 4 EXPERT CHEFS"
              subtitle="Expert Chefs In Fuddy"
            />
            <ChefList />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
