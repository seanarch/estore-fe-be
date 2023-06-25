import React, { useEffect } from "react";
import "./_cat-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import categorySlice from "../../Redux/Category/categorySlice";
import { getCategories } from "../../Redux/Category/actions";

const CatNav = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  console.log(categories);

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
