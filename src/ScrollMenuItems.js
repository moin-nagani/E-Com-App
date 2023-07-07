import React, { state, useEffect, Fragment } from "react";
import "./ScrollMenuItems.css";
import product1 from "./shared/images/product1.png";
import Product from "./Product";

function ScrollMenuItems(props) {
  useEffect(() => {
    const COMPONENT_SELECTOR = ".carousel__wrapper";
    const CONTROLS_SELECTOR = ".carousel__controls";
    const CONTENT_SELECTOR = ".carousel__content";

    const handleNextClick = (event) => {
      event.preventDefault();
      const content =
        event.currentTarget.parentNode.querySelector(CONTENT_SELECTOR);
      const x = content.clientWidth / 2 + content.scrollLeft + 0;
      content.scroll({
        left: x,
        behavior: "smooth",
      });
    };

    const handlePrevClick = (event) => {
      event.preventDefault();
      const content =
        event.currentTarget.parentNode.querySelector(CONTENT_SELECTOR);
      const x = content.clientWidth / 2 - content.scrollLeft + 0;
      content.scroll({
        left: -x,
        behavior: "smooth",
      });
    };

    const handleMousemove = (event, content) => {
      const mx2 = event.pageX - content.offsetLeft;
      if (content.mx) {
        content.scrollLeft = content.sx + content.mx - mx2;
      }
    };

    const handleMousedown = (event, content) => {
      content.sx = content.scrollLeft;
      content.mx = event.pageX - content.offsetLeft;
      content.classList.add("dragging");
    };

    const handleScroll = (event, nextButton, prevButton, maxScrollWidth) => {
      const content = event.currentTarget;
      toggleArrows(content, nextButton, prevButton, maxScrollWidth);
    };

    const handleMouseup = (content) => {
      content.mx = 0;
      content.classList.remove("dragging");
    };

    const toggleArrows = (content, nextButton, prevButton, maxScrollWidth) => {
      if (content.scrollLeft > maxScrollWidth - 10) {
        nextButton.classList.add("disabled");
      } else if (content.scrollLeft < 10) {
        prevButton.classList.add("disabled");
      } else {
        nextButton.classList.remove("disabled");
        prevButton.classList.remove("disabled");
      }
    };

    const components = document.querySelectorAll(COMPONENT_SELECTOR);

    components.forEach((component) => {
      const content = component.querySelector(CONTENT_SELECTOR);
      const nextButton = component.querySelector(".arrow-next");
      const prevButton = component.querySelector(".arrow-prev");
      const maxScrollWidth =
        content.scrollWidth - content.clientWidth / 2 - content.clientWidth / 2;

      if (maxScrollWidth !== 0) {
        component.classList.add("has-arrows");
      }

      if (nextButton) {
        nextButton.addEventListener("click", handleNextClick);
      }

      if (prevButton) {
        prevButton.addEventListener("click", handlePrevClick);
      }

      content.addEventListener("mousemove", (event) =>
        handleMousemove(event, content)
      );
      content.addEventListener("mousedown", (event) =>
        handleMousedown(event, content)
      );
      content.addEventListener("scroll", (event) =>
        handleScroll(event, nextButton, prevButton, maxScrollWidth)
      );
      content.addEventListener("mouseup", () => handleMouseup(content));
      content.addEventListener("mouseleave", () => handleMouseup(content));
    });
  }, []);
  // list of items
  const list = [
    { id: "1", name: "item1", image: product1 },
    { id: "2", name: "item2", image: product1 },
    { id: "3", name: "item3", image: product1 },
    { id: "4", name: "item4", image: product1 },
    { id: "5", name: "item5", image: product1 },
    { id: "6", name: "item6", image: product1 },
    { id: "7", name: "item7", image: product1 },
    { id: "8", name: "item8", image: product1 },
    { id: "9", name: "item9", image: product1 },
  ];

  let items = [];
  for (let number = 0; number < props?.props?.data?.length; number++) {
    items.push(
      <Product
        key={props?.props?.data[number].id}
        props={props?.props?.data[number]}
      ></Product>
    );
  }

  let i = 1;
  let n = 1;

  const generateImageSrc = (i, n) => {
    return `https://picsum.photos/id/${i}${n}/300/300`;
  };

  const renderCarouselItems = () => {
    const carouselItems = [];

    while (i < 2) {
      const carouselContentItems = [];

      while (n < 21) {
        carouselContentItems.push(
          <div className="carousel__content" key={n}>
            <a href="#">
              <img
                className="carousel__item__image"
                src={generateImageSrc(i, n)}
                alt=""
              />
              <div className="carousel__description">
                <h3 className="carousel__title">Amazing Title {n}</h3>
                <span className="carousel__subtitle">
                  Some subtitle goes here
                </span>
              </div>
            </a>
          </div>
        );

        n++;
      }

      carouselItems.push(
        <div className="carousel" key={i}>
          {/* <h2 className="carousel__headline">Headline {i}</h2> */}
          {/* <button className="carousel__arrow disabled arrow-prev"></button>
              <button className="carousel__arrow arrow-next"></button> */}
          <div className="carousel__item">{items}</div>
        </div>
      );

      i++;
      n = 1;
    }

    return carouselItems;
  };

  // const scrollView = (
  //   <div>
  //     <ReactSwipe
  //       childCount={2}
  //       className="carousel"
  //       swipeOptions={{ continuous: false }}
  //     >
  //       {/* {renderCarouselItems()} */}
  //     </ReactSwipe>
  //   </div>
  // );

  return (
    <div className="scroll-body">
      {/* <div className="container"> */}
      <div className="carousel">{renderCarouselItems()}</div>
      {/* </div> */}
    </div>
  );
}

export default ScrollMenuItems;
