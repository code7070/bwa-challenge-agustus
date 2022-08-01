import { Button } from "react-bootstrap";
import "./ButtonGhostPurple.css";

export default function ButtonGhostPurple({
  children,
  text,
  onClick,
  type = "button",
}) {
  return (
    <Button variant="ghostPurple" onClick={onClick} type={type}>
      {children || text}
    </Button>
  );
}
