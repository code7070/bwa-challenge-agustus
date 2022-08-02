import { Button } from "react-bootstrap";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import "./ButtonYellow.css";

export default function ButtonYellow({
  children,
  onClick,
  as,
  align = "left",
  disabled,
}) {
  return (
    <Button
      variant={`warning newWarning align-${align}`}
      as={as}
      onClick={onClick}
      className="align-items-center"
      disabled={disabled}
    >
      <div>{children}</div>
      <div className="arrowRight">
        <ChevronRightIcon />
      </div>
    </Button>
  );
}
