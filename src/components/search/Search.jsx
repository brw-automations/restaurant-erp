import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search__form-wrapper">
      <form method="get" action="">
        <input className="search__input" type="text" placeholder="Search products " />
        <input className="search__btn" type="submit" value="search" />
      </form>
      
    </div>
  );
}

export default Search;
