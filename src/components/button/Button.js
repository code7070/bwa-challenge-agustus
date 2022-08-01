import { Button as BootButton } from "react-bootstrap";
import "./Button.css";

export default function Button({ children, text, onClick, type = "button" }) {
  return (
    <BootButton variant="ghostPurple" onClick={onClick} type={type}>
      {children || text}
    </BootButton>
  );
}
