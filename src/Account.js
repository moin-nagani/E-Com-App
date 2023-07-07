import { Container } from "react-bootstrap";
import product1 from "./shared/images/product1.png";
import user1 from "./shared/images/user1.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaAngleRight,
  FaPen,
  FaLocationDot,
  FaHeart,
  FaClock,
  FaTruckFast,
  FaRegCreditCard,
  FaBell,
} from "react-icons/fa6";
import "./Account.css";

function Account() {
  const actionsList = [
    { id: "1", name: "Edit Profile", icon: <FaPen /> },
    { id: "2", name: "Shopping Address", icon: <FaLocationDot /> },
    { id: "3", name: "WishList", icon: <FaHeart /> },
    { id: "4", name: "Order History", icon: <FaClock /> },
    { id: "5", name: "Track Order", icon: <FaTruckFast /> },
    { id: "6", name: "Cards", icon: <FaRegCreditCard /> },
    { id: "7", name: "Notification", icon: <FaBell /> },
  ];

  let items = [];
  for (let i = 0; i < actionsList.length; i++) {
    items.push(
      <ListGroup.Item
        key={actionsList[i].id}
        action
        className="d-flex justify-content-between align-items-start"
        style={{ borderWidth: 0 }}
      >
        <div className="ms me-auto">
          <div className="fw-bold">
            <span
              style={{
                border: "1px solid",
                borderRadius: "5px",
                padding: "1px 5px 5px 5px",
                backgroundColor: "lightgray",
              }}
            >
              {actionsList[i].icon}
            </span>
            <span className="ms-4">{actionsList[i].name}</span>
          </div>
        </div>
        <FaAngleRight />
      </ListGroup.Item>
    );
  }

  return (
    <Container>
      <div className="userDetails ">
        <Row>
          <Col style={{ maxWidth: "120px" }}>
            <Image
              style={{ height: "100px", width: "100px", borderRadius: 50 }}
              src={user1}
            />
          </Col>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <div>
              <span className="fw-bold">David Spade</span>
              <br />
              <span> email@example.com</span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="action-list">
        <ListGroup>
          {items}
          {/* <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms me-auto">
              <div className="fw-bold">
                <FaPen />
                <span className="ms-2">Edit Profile</span>
              </div>
            </div>
            <FaAngleRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms me-auto">
              <div className="fw-bold">
                <FaPen />
                <span className="ms-2">Shopping Address</span>
              </div>
            </div>
            <FaAngleRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms me-auto">
              <div className="fw-bold">
                <FaPen />
                <span className="ms-2">Wishlist</span>
              </div>
            </div>
            <FaAngleRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms me-auto">
              <div className="fw-bold">
                <FaPen />
                <span className="ms-2">Order History</span>
              </div>
            </div>
            <FaAngleRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms me-auto">
              <div className="fw-bold">
                <FaPen />
                <span className="ms-2">Track Order</span>
              </div>
            </div>
            <FaAngleRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms me-auto">
              <div className="fw-bold">
                <FaPen />
                <span className="ms-2">Cards</span>
              </div>
            </div>
            <FaAngleRight />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms me-auto">
              <div className="fw-bold">
                <FaPen />
                <span className="ms-2">Notification</span>
              </div>
            </div>
            <FaAngleRight />
          </ListGroup.Item> */}
        </ListGroup>
      </div>
    </Container>
  );
}

export default Account;
