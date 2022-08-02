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
import "./NearRestoSection.css";
import { useEffect, useState } from "react";
import RestoCard from "../../components/restoCard/RestoCard";
import restaurantList from "../../data/restaurantList";

const CardLoading = () => {
  return (
    <Stack direction="horizontal" gap={4}>
      <RestoCard loading />
      <RestoCard loading />
      <RestoCard loading />
    </Stack>
  );
};

export default function NearRestoSection() {
  const [city, setCity] = useState("Jakarta, Indonesia");
  const [data, setData] = useState(false);

  useEffect(() => {
    const list = restaurantList;
    setData(false);
    if (city) {
      const lists = list.filter(
        ({ location: loc }) => `${loc.city}, ${loc.country}` === city
      );
      setTimeout(setData, 2000, lists.slice(0, 3));
    }
  }, [city]);

  const doSet = (e) => setCity(e.target.innerText);

  return (
    <section className="NearRestoSection">
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
              onClick={doSet}
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
        <Row className="mt-5 mb-5">
          {data ? (
            <Stack direction="horizontal" gap={4}>
              {data.map((resto) => (
                <RestoCard key={resto.name} data={resto} />
              ))}
            </Stack>
          ) : (
            <CardLoading />
          )}
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
