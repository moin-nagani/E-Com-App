import { useState } from "react";
import Card from "react-bootstrap/Card";

function Product(props) {
  const [data, SetData] = useState(props.props);

  let name = data?.name.split("<br/>");

  let productName = appendEllipsis(name[0]);
  let productNameInDifferentLanguage = appendEllipsis(name[1]);

  function appendEllipsis(str) {
    if (str == undefined) {
      return ""; // Return the original string if it's 10 characters or less
    } else if (str?.length <= 13) {
      return str; // Return the original string if it's 10 characters or less
    } else {
      return str?.slice(0, 13) + "... ";
    }
  }

  return (
    <Card
      className="carousel__content"
      style={{
        display: "block",
        minWidth: "200px",
        padding: "5px",
        margin: "5px",
        border: 0,
        textAlign: "center",
      }}
    >
      <Card.Img
        style={{ height: "12rem", border: "1px solid", borderRadius: "10px" }}
        src={data?.images != undefined ? data?.images[0]?.url : undefined}
      />
      <Card.Body>
        <Card.Title
          style={{ fontSize: "15px", textAlign: "center", marginBottom: "0" }}
        >
          <span style={{ fontWeight: "bold" }}>{productName}</span>
          <br />
          <span style={{ fontSize: "13px", color: "gray" }}>
            {productNameInDifferentLanguage ? (
              "(" + productNameInDifferentLanguage + ")"
            ) : (
              <br />
            )}
          </span>
        </Card.Title>
        <Card.Text style={{ fontSize: "15px", textAlign: "center" }}>
          <span style={{ color: "green" }}> {"$" + data?.price}</span>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Product;
