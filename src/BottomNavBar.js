import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Admin, Grid, Tag, Task } from "@rsuite/icons";
// import { BiSolidUser } from "react-icons/fa";
// import { BiSolidUser } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaUser, FaCartShopping, FaStore } from "react-icons/fa6";

function BottomNavBar() {
  return (
    <Navbar
      style={{ position: "fixed", bottom: 0, width: "100%" }}
      fixed="Bottom"
      expand="lg"
      bg="light"
      data-bs-theme="light"
    >
      <Container
        style={{
          textAlign: "center",
          paddingLeft: "25px",
          paddingRight: "25px",
          fontSize: "14px",
        }}
      >
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <FaStore /> <br />
          <span>Explore</span>
        </Link>
        <Link
          to="/categories"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <FaCartShopping />
          <br />
          <span>Cart</span>
        </Link>
        <Link
          to="/account"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <FaUser />
          <br />
          <span>Account</span>
        </Link>
      </Container>
    </Navbar>
  );
}

export default BottomNavBar;
