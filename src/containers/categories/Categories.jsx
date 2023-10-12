import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {AiFillPlusCircle}  from "react-icons/ai"
import { categoriesActions } from "../../store/index";
import Card from "../../components/card/Card";
import "./Categories.css";

function Categories() {
    const dispatch = useDispatch();
    const addCategoryHandler = ()=>{
        dispatch(
          categoriesActions.add({
            name: "test cat",
            icon: "public/images/Josephine BBQ-35.JPG",
          })
        );
    }
  const categories = useSelector((state) => state.categories.categories)
    return (
      <div className="categories-wrapper">
        {categories.map((item, index) => (
          <Card>
            <img
              style={{ borderRadius: "50%" }}
              src={item.icon}
              width="75px"
              height="75px"
            />
            <p>{item.name}</p>
          </Card>
        ))}
        <Card>
          <AiFillPlusCircle style={{fontSize: "80px"}} onClick={addCategoryHandler}/>
          <p>Add</p>
        </Card>
      </div>
    );
}

export default Categories;
