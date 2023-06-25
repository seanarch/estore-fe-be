import React, { useEffect } from "react";
import "./_cat-nav.scss";
import { useDispatch, useSelector } from "react-redux";
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
          if (category.parent_category_id === null) {
            return (
              <li key={category.category} className="list-items">
                <a href="#">{category.category}</a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default CatNav;
