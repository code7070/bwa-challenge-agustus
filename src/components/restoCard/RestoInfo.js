import {
  faArrowRight,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Spinner, Stack } from "react-bootstrap";
import "./RestoInfo.css";

const convert = (num = 0) =>
  `${num}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const RestoRating = ({ data }) => {
  let rating = <Spinner animation="grow" variant="warning" />;
  if (data && data.rating) rating = data.rating;
  const reviewCount =
    data.reviewedBy > 1000 ? `${data.reviewedBy / 1000}K+` : data.reviewedBy;
  return (
    <div className="restoInfo__section restoInfo__rating">
      <FontAwesomeIcon icon={faStar} />
      <span>{rating}</span>
      <span className="restoInfo__reviewed">({reviewCount})</span>
    </div>
  );
};

const RestoName = ({ loading, data }) => {
  let name = <div className="restoInfo__name-loading" />;
  if (data && data.name) name = data.name;
  return <div className="restoInfo__section restoInfo__name">{name}</div>;
};

const RestoPrice = ({ data, mode }) => {
  if (mode === "featured" || mode === "lean") return "";
  let ret = <div className="restoInfo__priceRange-loading" />;
  if (data && data.price) {
    const { price } = data;
    ret = `IDR ${convert(price.bottom)} - IDR ${convert(price.top)}`;
  }
  return <div className="restoInfo__section restoInfo__priceRange">{ret}</div>;
};

const RestoLocation = ({ data, mode }) => {
  const loc = data && data.location;
  if ((loc && mode === "featured") || mode === "lean") {
    const locView = `${loc.city}, ${loc.country}`;
    return (
      <Stack direction="horizontal" gap={2} className="restoInfo__loc">
        <FontAwesomeIcon icon={faLocationDot} />
        {locView}
      </Stack>
    );
  }
  return "";
};

export default function RestoInfo({ loading, data, mode }) {
  return (
    <Card className="restoInfo d-flex flex-row align-items-center justify-content-between">
      <div>
        <RestoRating data={data} />
        <RestoName data={data} />
        <RestoPrice data={data} mode={mode} />
        <RestoLocation data={data} mode={mode} />
      </div>
      <div>
        <Button variant="warning" disabled={!data}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </Card>
  );
}
