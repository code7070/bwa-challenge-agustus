import { Card } from "react-bootstrap";
import RestoInfo from "../restoInfo/RestoInfo";
import "./RestoCard.css";

export default function RestoCard({ loading, data }) {
  console.log("Resto card: ", data);
  return (
    <Card className="restoCard">
      <div className="restoCard__image">
        {!loading && <img alt="" src={`/images/restaurant/${data.image}`} />}
      </div>
      <div className="restoCard__info">
        <RestoInfo data={data} loading={loading} />
      </div>
    </Card>
  );
}
