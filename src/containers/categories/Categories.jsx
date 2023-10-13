import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import { categoriesActions } from "../../store/index";
import Card from "../../components/card/Card";
import "./Categories.css";

function Categories() {
  const dispatch = useDispatch();
  const addCategoryHandler = () => {
    dispatch(
      categoriesActions.add({
        name: "test cat",
        icon: "../../assets/images/Josephine BBQ-71.JPG",
      })
    );
  };
  const categories = useSelector((state) => state.categories.categories);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="categories-wrapper">
      {categories.map((item, index) => (
        <Card>
          <img
            style={{ borderRadius: "50%" }}
            src={item.icon}
            width="50px"
            height="50px"
          />
          <p className="category__title"> {item.name}</p>
        </Card>
      ))}
      {isAuthenticated && (
        <Card>
          <AiFillPlusCircle
            style={{ fontSize: "80px" }}
            onClick={addCategoryHandler}
          />
          <p>Add</p>
        </Card>
      )}
    </div>
  );
}

export default Categories;
