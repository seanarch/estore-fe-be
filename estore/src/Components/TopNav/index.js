import React from "react";
import "./_top-nav.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const TopNav = () => {
  const cartItemCount = useSelector((state) => state.cr.totalItems);
  return (
    <div>
      <div className="header bg-dark">
        <div className="row top-nav-row">
          <div className="brand my-1">
            <h1>eStore</h1>
          </div>
          <div className="inp-container p-0 my-4 w-50 h-25 bg-white">
            <div className="dropdown m-0 p-0">
              <select className="select-btn w-100 p-0 m-0" name="" id="">
                <option value="">Men</option>
                <option value="">Women</option>
                <option value="">Kids</option>
              </select>
            </div>
            <input className="form-control" placeholder="Search" />
            <button>
              <i className="fa fa-search" />
            </button>
          </div>
          <div className="login-container p-0">
            <i className="fa fa-user-circle user-icon" />
            <h5>
              <GoogleLogin
                clientId="1054942627751-squdpe3iac5s7t1l55sljivs94fudh4o.apps.googleusercontent.com"
                buttonText="Login"
              />
            </h5>
          </div>
          <div className="cart-wishlist">
            <ul className="p-0">
              <li className="list-icon">
                <i className="fa fa-heart"></i>
              </li>
              <Link to="/cart">
                <li className="list-icon">
                  <i className="fa fa-shopping-cart"></i>
                  {cartItemCount ? (
                    <div id="cart-item-count">
                      <p>{cartItemCount}</p>
                    </div>
                  ) : null}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
