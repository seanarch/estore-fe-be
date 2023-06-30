import React from "react";
import { useSelector } from "react-redux";

const FilledCart = () => {
  const cart = useSelector((state) => state.cr);

  return (
    <div>
      <div className="row my-5">
        <div className="col-8 p-4">
          {cart.cartItems.map((item) => {
            return (
              <div>
                <div className="row">
                  <div className="col-4">
                    <img
                      src={require("../../../assets/images/shop/" +
                        item.product_img)}
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <div className="p-3">
                      <span>{item.product_name}</span>
                      <div>
                        <span>${item.price}</span>
                      </div>
                      <div>
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                      </div>
                      <hr />
                      <div>
                        <div className="btn-group mx-3">
                          <div className="btn btn-outline-dark">
                            <span> - </span>
                          </div>
                          <div className="btn"> 0 </div>
                          <div className="btn btn-outline-dark">
                            <span> + </span>
                          </div>
                        </div>
                        <div className="btn btn-outline-danger mx-4">
                          <span>
                            <i className="fa fa-trash" mx-2 /> Remove Item
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-4 px-4 py-3 my-4">
          <h2 className="mb-5 mt-3">Summary</h2>
          <div>
            <span> Cart Total : ${cart.totalItemsPrice}</span>
            <span> Shipping Charges : Free</span>
            <hr />
            <span> Total : ${cart.totalItemsPrice}</span>
            <hr />
          </div>
          <div className="btn btn-outline-dark w-100 mb-4 mt-1">Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default FilledCart;
