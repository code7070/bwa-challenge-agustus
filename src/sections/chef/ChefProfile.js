import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Nav, Stack } from "react-bootstrap";
import VerifiedIcon from "../../components/icons/VerifiedIcon";
import chefList from "../../data/chefList";
import restaurantList from "../../data/restaurantList";
import "./ChefProfile.css";

const WorkAt = ({ restoWork }) => {
  if (!restoWork || !restoWork.name) return "";
  return (
    <Card className="cp__info cp__work">
      <Card.Body className="d-flex align-items-center">
        <div className="cpw__photo">
          <img
            alt={restoWork.name}
            src={`/images/restaurant/${restoWork.image}`}
          />
        </div>
        <div>
          <div className="cpw__at">Chef at restaurant:</div>
          <div className="cpw__name">{restoWork.name}</div>
          <Stack as={Nav.Link} direction="horizontal" gap={2}>
            View Details
            <FontAwesomeIcon icon={faChevronRight} />
          </Stack>
        </div>
      </Card.Body>
    </Card>
  );
};

const Experience = ({ exp }) => {
  if (!exp || exp.years < 1) return "";

  return (
    <Card className="cp__info cp__experience">
      <Card.Body>
        <div>
          <VerifiedIcon />
        </div>
        <div className="cp__exp-time">{exp.years} Years</div>
        <div className="cp__exp-timeUnit">Experience</div>
      </Card.Body>
    </Card>
  );
};

export default function ChefProfile({ sels }) {
  const { sel } = sels;

  const { photo, experience: exp, workAt } = chefList[sel];

  let restoWork = false;
  if (workAt) restoWork = restaurantList.find((x) => x.name === workAt);

  return (
    <div className="ChefProfile">
      <div className="cp__photo">
        <img alt="chef" src={`/images/chef/${photo}`} />
      </div>
      <Experience exp={exp} />
      <WorkAt restoWork={restoWork} />
    </div>
  );
}
