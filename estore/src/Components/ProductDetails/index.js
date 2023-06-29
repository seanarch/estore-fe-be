import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>
        <div>
          <img
            src={require("../../assets/images/shop/" +
              location.state.product_img)}
            alt=""
          />
        </div>
        <div>
          <span>{location.state.product_name}</span>
          <div>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <div>
            MSRP : <span>{location.state.price}</span>
            <div>Inclusive of all taxes. </div>
          </div>
          <div>
            <span>Some Product Desc</span>
          </div>
          <div>
            <div>
              <div>
                <i className="fa fa-shopping-cart" />
              </div>
            </div>
            <p>Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
