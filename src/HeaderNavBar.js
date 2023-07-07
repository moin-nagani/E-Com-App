import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

function HeaderNavBar() {
  return (
    <Navbar
      expand="lg"
      bg="primary"
      data-bs-theme="dark"
      className="bg-body-tertiary"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="/">UI App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default HeaderNavBar;
