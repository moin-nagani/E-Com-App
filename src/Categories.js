import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import product1 from "./shared/images/product1.png";
import Product from "./Product";
import "./Categories.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseURL = "https://portal.payar.co.uk/api/v35/";

  // const [categories, setCategories] = useState([
  //   { id: "1", name: "category1" },
  //   { id: "2", name: "category2" },
  //   { id: "3", name: "category3" },
  //   { id: "4", name: "category4" },
  //   { id: "5", name: "category5" },
  //   { id: "6", name: "category6" },
  //   { id: "7", name: "category7" },
  //   { id: "8", name: "category8" },
  //   { id: "9", name: "category9" },
  // ]);

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

  useEffect(() => {
    setTimeout(() => {
      getCategories();
      if (categories?.data?.length > 0) setLoading(true);
    }, 2000);
  }, []);

  const getCategories = async () => {
    await axios
      .get(baseURL + "retailer-categories?page_size=15")
      .then((result) => {
        setCategories(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let items = [];
  for (let number = 0; number < list.length; number++) {
    items.push(<Product key={list[number].id} props={list[number]}></Product>);
  }

  let tabs = [];
  for (let number = 0; number < categories?.data?.length; number++) {
    tabs.push(
      <Tab
        key={categories?.data[number].id}
        eventKey={categories?.data[number].category_name}
        title={categories?.data[number].category_name}
        color={categories?.data[number].color}
      >
        <div
          className="tab-body "
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {items}
        </div>
      </Tab>
    );
  }

  return (
    <Tabs
      id="uncontrolled-tab-example"
      className="mb-3"
      style={{
        flexWrap: "nowrap",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      {tabs}
    </Tabs>
  );
}

export default Categories;
