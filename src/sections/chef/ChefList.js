import {
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Stack } from "react-bootstrap";
import ButtonYellow from "../../components/button/ButtonYellow";
import HeadSection from "../../components/headSection/HeadSection";
import chefList from "../../data/chefList";
import "./ChefList.css";

const ChefItem = ({ name, location: loc, chefType, sel, set, index }) => {
  const click = () => set(index);
  const isActive = index === sel ? "active" : "";
  return (
    <Card className={`chefRow mb-4 ${isActive}`} onClick={click}>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="chefType">{chefType}</div>
            <div className="chefName">{name}</div>
            <Stack direction="horizontal" gap={2} className="chefLoc">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{`${loc.city}, ${loc.country}`}</span>
            </Stack>
          </div>
          <div>
            <Stack direction="horizontal" gap={2} className="chefCta">
              <span>Profile Details</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Stack>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const ChefSelector = ({ sels }) => {
  return (
    <div className="chefList">
      {chefList.map((chef, index) => (
        <ChefItem {...chef} {...sels} index={index} key={chef.name} />
      ))}
    </div>
  );
};

export default function ChefList({ sels }) {
  return (
    <>
      <HeadSection
        align="left"
        title="TOP 4 EXPERT CHEFS"
        subtitle="Expert Chefs In Fuddy"
      />
      <ChefSelector sels={sels} />
      <ButtonYellow>Chef List</ButtonYellow>
    </>
  );
}
