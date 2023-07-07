import { Container } from "react-bootstrap";
import ScrollMenuItems from "./ScrollMenuItems";

function Products(props, contentLoading) {
  let scrollMenu;

  if (contentLoading) {
    scrollMenu = (
      <div>
        <ScrollMenuItems props={props.items}></ScrollMenuItems>
      </div>
    );
  } else {
    scrollMenu = (
      <div>
        <h2>Loading...</h2>
        {/* <ScrollMenuItems itemsList={itemsList}></ScrollMenuItems> */}
      </div>
    );
  }

  return (
    <Container fluid style={{ marginTop: 10 }}>
      <h6>{props.header.toUpperCase()}</h6>
      {scrollMenu}
    </Container>
  );
}

export default Products;
