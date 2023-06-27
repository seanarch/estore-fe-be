import React, { useEffect } from "react";
import "./_products.scss";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../Redux/Product/productSlice";
import { getProducts } from "../../Redux/Product/productAction";
import { addCartItem } from "../../Redux/Cart/cartSlice";

const Products = () => {
  const productData = useSelector((state) => state.pr.products);
  const cart = useSelector((state) => state.cr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (itemData) => {
    dispatch(addCartItem(itemData));
  };

  console.log(cart);

  return (
    <div className="products-container">
      {productData.map((product, key) => {
        return (
          <div key={product.pName} className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img
                src={require("../../assets/images/shop/" + product.product_img)}
                alt=""
              />
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{product.product_name}</a>
              </h5>
              <p className="product-price">{product.price}</p>
              <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
            <div className="my-3" onClick={() => addToCart(product)}>
              <div className="cart-button">
                <div className="cart-icon-container">
                  <i className="fa fa-shopping-cart mx-4" />
                </div>
                <div className="cart-text-container mx-3">
                  <p>Add to Cart</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
