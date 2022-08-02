import { Container, Card, Row, Col, Nav } from "react-bootstrap";
import HeadSection from "../../components/headSection/HeadSection";
import ChevronRightIcon from "../../components/icons/ChevronRightIcon";
import CleanIcon from "../../components/icons/CleanIcon";
import DiscountIcon from "../../components/icons/DiscountIcon";
import EatIcon from "../../components/icons/EatIcon";
import FeeIcon from "../../components/icons/FeeIcon";
import "./Benefit.css";

const benefitList = [
  {
    title: "Extra Discounts",
    description: "Get your special discount by using our reservation",
    icon: <DiscountIcon />,
    url: "/benefit/extra-discounts",
  },
  {
    title: "Come and Eat",
    description: "Get your own table quickly & without waiting in line",
    icon: <EatIcon />,
    url: "/benefit/come-and-eat",
  },
  {
    title: "No Extra Fee",
    description:
      "Get tax free if you want to order food and make a reservation",
    icon: <FeeIcon />,
    url: "/benefit/no-extra-fee",
  },
  {
    title: "Guaranteed Cleanliness",
    description: "We ensure the cleanliness of the place as well as the food",
    icon: <CleanIcon />,
    url: "/benefit/cleanliness",
  },
];

const BenefitCard = ({ title, description, icon, url }) => {
  return (
    <Col>
      <Card className="benefit__card-item" as={Nav.Link} href={url}>
        <Card.Body>
          <div className="card-icon">{icon}</div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer href={url}>
          <div>View Details</div>
          <div className="details-arrow">
            <ChevronRightIcon />
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default function BenefitSection() {
  return (
    <section className="benefit__section">
      <Container>
        <div className="benefit__head">
          <HeadSection
            title="Why Should Choose Us?"
            subtitle="SPECIAL BENEFIT FOR YOU"
          />
        </div>
        <div className="benefit__point">
          <Row className="benefit__row">
            {benefitList.map((item) => (
              <BenefitCard key={item.title} {...item} />
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
