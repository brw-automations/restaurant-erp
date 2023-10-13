import React from "react";
import Products from "../../containers/products/Products";
import Search from "../../components/search/Search";
import "./Products.css";
function ProductsPage() {
  return (
    <>
      <Search />

      <Products />
    </>
  );
}

export default ProductsPage;
