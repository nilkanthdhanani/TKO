import React from 'react'
import './verification.scss';
import ellipse from "../../assets/images/ageVerification/ellipse.png";
import ellipse3 from "../../assets/images/ageVerification/ellipse3.png";
import ellipse2 from "../../assets/images/ageVerification/ellipse3.png";
import cloud1 from "../../assets/images/ageVerification/cloud1.png";
import cloud2 from "../../assets/images/ageVerification/cloud2.png";
import logo from "../../assets/images/ageVerification/logo.png";
import lockbg from "../../assets/images/ageVerification/lockbg.png";
import lock from "../../assets/images/ageVerification/lock.png";
import redbox from "../../assets/images/ageVerification/redbox.png";
import ellipse673 from "../../assets/images/ageVerification/ellipse673.png";
import close from "../../assets/images/ageVerification/close.png";
import { Link } from 'react-router-dom';

export default function Verification() {
  return (
    <div>
      <div className="first-div-verification">
        <div className="blur-div">
          <div className="verification-box">
            <Link to={"/"}>
              <div className="verification-box-close">
                <img src={close} alt="close" />
              </div>
            </Link>
            <div className="product-div-light-title">
              <div className="product-div-light-title-image">
                <img src={logo} alt="logo" />
              </div>
              <div className="product-div-light-title-head">
                <h2>Are you 21 years old ?</h2>
              </div>
              <div className="product-div-light-title-button">
                <Link to={"/orders"}>
                  <div className="product-div-light-title-button1">
                    <button type='button'>Yes</button>
                  </div>
                </Link>
                <Link to={"/sorry"}>
                <div className="product-div-light-title-button2">
                  <button type='button'>No</button>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="first-div-contant">
          <div className="header">
            <div className="header-container">
              <div className="header-div">
                <div className="header-div-flex">
                  <div className="header-div-flex-logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="header-div-flex-ancer">
                    <a href="Authenticate">Authenticate</a>
                    <a href="Products">Products</a>
                    <a href="Lab Results">Lab Results</a>
                    <a href="Contact Us">Contact Us</a>
                  </div>
                  <div className="header-div-flex-lock">
                    <img src={lockbg} alt="lockbg" />
                    <div className="header-div-flex-lock-img">
                      <img src={lock} alt="lock" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="first-div-head">
            <div className="first-div-head-main">
              <div className="first-div-head-main-title">
                <h1>Discover, Authenticate, And Shop Our <br />
                  <span>Premium Cannabis Products</span>
                </h1>
              </div>
              <div className="first-div-head-main-red">
                <img src={redbox} alt="redbox" />
                <div className="first-div-head-main-red-line">
                  <img src={ellipse673} alt="ellipse673" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="first-div-frame">
          <div className="first-div-frame-ellipse">
            <img src={ellipse} alt="ellipse" />
          </div>
        </div>
        <div className="first-div-frame2">
        </div>
        <div className="first-div-frame2-moon-main">
          <div className="first-div-frame2-moon-main-relative">
            <div className="first-div-frame2-moon1">
              <img src={ellipse3} alt="ellipse3" />
            </div>
            <div className="first-div-frame2-moon2">
              <img src={ellipse2} alt="ellipse2" />
            </div>
            <div className="first-div-frame2-cloud1-main">
              <div className="first-div-frame2-cloud1">
                <img src={cloud1} alt="cloud1" />
              </div>
              <div className="first-div-frame2-cloud2">
                <img src={cloud2} alt="cloud2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
