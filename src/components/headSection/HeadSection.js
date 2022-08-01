import "./HeadSection.css";

export default function HeadSection({
  title = "Title",
  subtitle = "Subtitle",
  align = "center",
}) {
  return (
    <div className={`headSection align-${align}`}>
      <div className="headSubtitle">{title}</div>
      <div className="headTitle">{subtitle}</div>
    </div>
  );
}
