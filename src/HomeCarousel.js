import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import React, { useEffect } from "react";
import "./HomeCarousel.css";

function HomeCarousel({ imageDataList, contentLoading }) {
  // const [imageList, setImageList] = useState(imageDataList);

  useEffect(() => {
    createArray();
  }, []);
  let items = [];

  console.log(contentLoading);
  const createArray = () => {};

  if (imageDataList?.data?.length > 0) {
    for (let i = 0; i < imageDataList?.data?.length; i++) {
      items.push(
        <Carousel.Item key={imageDataList.data[i].id}>
          <img
            className="d-block w-100"
            src={imageDataList.data[i].image}
            style={{
              maxHeight: "30rem",
            }}
            // style={{ height: "120px" }}
            alt={i}
          />
          <Carousel.Caption className="" style={{ top: 0, marginTop: "5px" }}>
            <h4 style={{ marginTop: "5px", color: "black" }}>
              {imageDataList.data[i].title}
            </h4>
            <p style={{ marginTop: "5px", color: "black" }}>
              {imageDataList.data[i].description}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }
  } else {
    items.push(
      <Carousel.Item key="1">
        <img
          className="d-block w-100 "
          // src={}
          alt="loading..."
        />
        <Carousel.Caption>
          <h3> Loading...</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
  // console.log(imageDataList);
  // console.log(names);

  // console.log(imageDataList.imageDataList);

  const carouselView = (
    <div>
      <Carousel
        style={{
          border: "1px ",
          borderRadius: "10px",
        }}
        controls={false}
      >
        {items}
      </Carousel>
    </div>
  );

  return (
    <Container fluid>
      {carouselView}
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </Container>
  );
}

export default HomeCarousel;
