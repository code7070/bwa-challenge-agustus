import { Nav, Dropdown, Navbar, Container, Stack } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import RestoIcon from "../icons/RestoIcon";
import "./Header.css";
import FormSearch from "./FormSerach";

const linkList = [
  { url: "/", text: "Home" },
  {
    url: "/category",
    text: "Category",
    child: [
      { url: "/category/casual", text: "Casual" },
      { url: "/category/pizza-places", text: "Pizza Places" },
    ],
  },
  { url: "/services", text: "Services" },
  { url: "/about-us", text: "About Us" },
];

const LinkItem = ({ url, text, child = [] }) => {
  if (child.length > 0)
    return (
      <Dropdown as={Nav.Item}>
        <Dropdown.Toggle as={Nav.Link}>{text}</Dropdown.Toggle>
        <Dropdown.Menu>
          {child.map((c) => (
            <Dropdown.Item as={Nav.Link} href={c.url} key={c.url}>
              {c.text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  return <Nav.Link href={url}>{text}</Nav.Link>;
};

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="with-space">
      <Container>
        <Navbar>
          <Container>
            <Nav
              activeKey={pathname}
              onSelect={(selectedKey) => navigate(selectedKey)}
              className="navLinkBwa"
            >
              {linkList.map((item) => (
                <Nav.Item key={item.url}>
                  <LinkItem {...item} />
                </Nav.Item>
              ))}
            </Nav>
            <Navbar.Brand href="/">
              <div>
                <RestoIcon /> <span className="Header__logo-name">Resto</span>
              </div>
            </Navbar.Brand>
            <FormSearch />
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}
