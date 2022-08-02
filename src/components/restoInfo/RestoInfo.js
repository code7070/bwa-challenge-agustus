import { Card, Spinner } from "react-bootstrap";
import "./RestoInfo.css";

const convert = (num = 0) =>
  `${num}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default function RestoInfo({ loading, data }) {
  if (!loading && !data) return "";
  let rating = loading ? (
    <Spinner animation="grow" variant="warning" />
  ) : (
    `${data.rating}.0`
  );
  let name = loading ? <div className="restoInfo__name-loading" /> : data.name;
  let price = loading ? (
    <div className="restoInfo__priceRange-loading" />
  ) : (
    `${`IDR ${convert(data.price.bottom)}`} - ${`IDR ${convert(
      data.price.top
    )}`}`
  );
  return (
    <Card className="restoInfo d-flex align-items-center justify-content-between">
      <div className="restoInfo__rating">{rating}</div>
      <div className="restoInfo__name">{name}</div>
      <div className="restoInfo__priceRange">{price}</div>
    </Card>
  );
}
