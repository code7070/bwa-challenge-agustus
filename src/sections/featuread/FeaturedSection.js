import {
  Container,
  Row,
  Col,
  Stack,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import ButtonYellow from "../../components/button/ButtonYellow";
import HeadSection from "../../components/headSection/HeadSection";
import "./FeaturedSection.css";
import { useState } from "react";

export default function FeaturedSection() {
  const [city, setCity] = useState("Jakarta, Indonesia");

  const doSet = (e) => setCity(e.target.innerText);

  return (
    <section className="FeaturedSection">
      <Container>
        <Row className="justify-content-between">
          <Col md={4}>
            <HeadSection
              title="Restaurant Near You"
              subtitle="RESTAURANT BASED BY CITY"
              align="left"
            />
          </Col>
          <Col md={4} className="d-flex justify-content-end align-items-center">
            <DropdownButton
              variant="secondary"
              className="selectCity"
              onClick={(e) => {
                console.log("Select: ", e.target.innerText);
                doSet(e);
              }}
              title={
                <Stack direction="horizontal" gap={3}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div>{city}</div>
                  <FontAwesomeIcon icon={faChevronDown} />
                </Stack>
              }
            >
              <Dropdown.Item>Jakarta, Indonesia</Dropdown.Item>
              <Dropdown.Item>Padang, Indonesia</Dropdown.Item>
              <Dropdown.Item>Bandung, Indonesia</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <ButtonYellow align="center">View All Restaurant</ButtonYellow>
          </Col>
          <Col md={4} />
        </Row>
      </Container>
    </section>
  );
}
