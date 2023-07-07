import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Home.css";
import HomeCarousel from "./HomeCarousel";
import Products from "./Products";
import axios from "axios";

function Home() {
  const [imageCarouselData, SetImageCarouselData] = useState([]);
  const [bestSellingItems, SetBestSellingData] = useState([]);
  const [recommendedProducts, SetRecommendedProducts] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const baseURL = "https://portal.payar.co.uk/api/v35/";

  useEffect(() => {
    setTimeout(() => {
      getBestSellingData();
      if (bestSellingItems?.data?.length > 0) setLoading(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      geRecommendedProducts();
      if (recommendedProducts?.data?.length > 0) setLoading(true);
    }, 2000);
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      getCarouselData();
      if (imageCarouselData?.data?.length > 0) setImageLoading(true);
    }, 2000);
  }, []);

  const getCarouselData = async () => {
    await axios
      .get(baseURL + "home-slider")
      .then((result) => {
        SetImageCarouselData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBestSellingData = async () => {
    const result = await axios(
      baseURL +
        "products?search_text=&retailer_id=83%20&page_size=18&product_category_id=665"
    );

    SetBestSellingData(result.data);
  };

  const geRecommendedProducts = async () => {
    const result = await axios(
      baseURL + "products?search_text=&retailer_id=187"
    );

    SetRecommendedProducts(result.data);
  };

  return (
    <div>
      <HomeCarousel
        imageDataList={imageCarouselData}
        contentLoading={imageLoading}
      ></HomeCarousel>
      <Products
        header="Best Selling Items"
        items={bestSellingItems}
        contentLoading={loading}
      ></Products>
      <Products
        header="Recommended Products"
        items={recommendedProducts}
      ></Products>
      {/* <Products header="products"></Products> */}
    </div>
  );
}

export default Home;
