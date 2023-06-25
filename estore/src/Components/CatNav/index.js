import React from "react";
import "./_cat-nav.scss";
import { useSelector } from "react-redux";
import categorySlice from "../../Redux/Category/categorySlice";

const CatNav = () => {
  const categories = useSelector(categorySlice.getInitialState);
  return (
    <div className="cat-nav-container container">
      <ul>
        {categories.map((category) => {
          return (
            <li key={category} className="list-items">
              <a href="#">{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CatNav;
