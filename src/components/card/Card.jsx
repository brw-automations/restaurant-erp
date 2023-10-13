import React from "react";
import "./Card.css";

function Card({ children, ...props }) {
  return <a className="card-wrapper">{children}</a>;
}

export default Card;
