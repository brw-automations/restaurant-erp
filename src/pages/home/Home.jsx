import React from "react";


import "./Home.css"
import Categories from "../../containers/categories/Categories";
import Products from "../../containers/products/Products";
function Home() {
  return (
    <div className="home__container">
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
