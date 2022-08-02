import { Card } from "react-bootstrap";
import RestoInfo from "./RestoInfo";
import "./RestoCard.css";

export default function RestoCard({
  loading,
  data,
  mode,
  onHover = undefined,
}) {
  return (
    <Card className={`restoCard ${mode}`} onMouseEnter={onHover}>
      <div className="restoCard__image">
        {data && data.image && (
          <img alt="" src={`/images/restaurant/${data.image}`} />
        )}
      </div>
      <div className={`restoCard__info ${mode}`}>
        <RestoInfo data={data} mode={mode} loading={loading} />
      </div>
    </Card>
  );
}
