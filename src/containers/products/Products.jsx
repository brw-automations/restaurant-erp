import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Products.css";
import Card from "../../components/card/Card";

function Products() {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="products__container">
      {products.map((item, index) => (
        <div className="product__wrapper" key={index}>
          <div className="product__intro">
            <img src={item.icon} />
          </div>
          <div className="product__details">
            <div className="product__details-name">
              <h3> {item.name}</h3>
              <strong>Ksh. {item.price}</strong>
            </div>
            <div className="product__details-cart">
              <a href="/">
                <AiOutlineShoppingCart />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
