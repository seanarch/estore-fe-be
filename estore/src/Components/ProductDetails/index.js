import { useLocation } from "react-router-dom";
import "./_product-detail.scss";

const ProductDetails = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <div className="row conatiner my-5 product-details-container">
        <div className="col-5 product-img-container">
          <img
            src={require("../../assets/images/shop/" +
              location.state.product_img)}
            alt=""
          />
        </div>
        <div className="col-7 product-info">
          <span id="product-name"> {location.state.product_name} </span>

          <div className="rating-container">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <hr />
          <div className="product-price">
            MSRP : <span className="price"> ${location.state.price} </span>
            <div style={{ fontSize: "0.8em" }}> Inclusive of all taxes. </div>
          </div>
          <div className="my-3 product-description">
            <span> Some Product Description Given Here... </span>
          </div>

          <div className="my-5">
            <div className="btn btn-warning cart-button">
              <div className="cart-icon-container">
                <i className="fa fa-shopping-cart" />
              </div>
              <div className="cart-text-container">
                <p> Add to Cart </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
