import {
  faArrowRight,
  faLocationDot,
  faMoneyBill1Wave,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Spinner, Stack } from "react-bootstrap";
import ButtonYellow from "../button/ButtonYellow";
import InfoIcon from "../icons/InfoIcon";
import "./RestoInfo.css";

const convert = (num = 0) =>
  `${num}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const rThousand = (num, plus) =>
  `${(num / 1000).toFixed(1)}K${plus ? "+" : ""}`;
const ratingThousand = (num, plus) => (num > 1000 ? rThousand(num, plus) : num);

const pThousand = (num, plus) =>
  `${String(Math.round(num / 1000)).replaceAll(",", ".")}K${plus ? "+" : ""}`;
const priceThousand = (num, plus) => (num > 1000 ? pThousand(num, plus) : num);

const RestoReview = ({ data }) => {
  if (!data) return "";

  const reviewCount = ratingThousand(data.reviewedBy, true);
  return <span className="restoInfo__reviewed">({reviewCount})</span>;
};

const Star = ({ data, mode }) => {
  if (!data) return "";
  const numRate = parseInt(data.rating, 10);
  let star = <FontAwesomeIcon icon={faStar} />;
  if (mode === "complete")
    star = Array(numRate)
      .fill()
      .map((z) => <FontAwesomeIcon icon={faStar} />);
  return star;
};

const RestoRating = ({ data, mode }) => {
  let rating = <Spinner animation="grow" variant="warning" />;
  if (data && data.rating) rating = data.rating;
  return (
    <div className="restoInfo__section restoInfo__rating">
      <Star data={data} mode={mode} />
      <span>{rating}</span>
      <RestoReview data={data} />
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
  if (loc && (mode === "featured" || mode === "lean" || mode === "complete")) {
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

const RestoReservation = ({ data, mode }) => {
  if (mode !== "complete" || !data) return "";
  const { reservation: res } = data;
  let cost = "No extra cost";
  let icon = <InfoIcon />;
  if (res.cost > 0) {
    cost = `IDR ${priceThousand(res.cost)}`;
    icon = <FontAwesomeIcon icon={faMoneyBill1Wave} />;
  }
  return (
    <Stack className="restoInfo__reservation">
      <ButtonYellow disabled={!res.available}>Make Reservation</ButtonYellow>
      <div className="restoInfo__reservation-cost">
        {icon} {cost}
      </div>
    </Stack>
  );
};

export default function RestoInfo({ loading, data, mode }) {
  const bootClass =
    "d-flex flex-row align-items-center justify-content-between";
  const componentClass = `restoInfo ${mode}`;
  return (
    <Card className={`${bootClass} ${componentClass}`}>
      <div>
        <RestoRating data={data} mode={mode} />
        <RestoName data={data} />
        <RestoPrice data={data} mode={mode} />
        <RestoLocation data={data} mode={mode} />
        <RestoReservation data={data} mode={mode} />
      </div>
      <div className="restoInfo__next">
        <Button variant="warning" disabled={!data}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </Card>
  );
}
