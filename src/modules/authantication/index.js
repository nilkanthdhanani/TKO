import React from 'react'
import './authantication.scss';
import ellipse from "../../assets/images/authantication/ellipse.png";
import ellipse2 from "../../assets/images/authantication/ellipse2.png";
import ellipse3 from "../../assets/images/authantication/ellipse3.png";
import cloud1 from "../../assets/images/authantication/cloud1.png";
import cloud2 from "../../assets/images/authantication/cloud2.png";
import logo from "../../assets/images/authantication/logo.png";
import lockbg from "../../assets/images/authantication/lockbg.png";
import lock from "../../assets/images/authantication/lock.png";
import redbox from "../../assets/images/authantication/redbox.png";
import ellipse673 from "../../assets/images/authantication/ellipse673.png";
import close from "../../assets/images/authantication/close.png";
import { Link } from 'react-router-dom';

export default function Authantication() {
  return (
    <div>
      <div className="first-div-authantication">
        <div className="blur-div">
          <div className="verification-box">
            <Link to={"/"}>
              <div className="verification-box-close">
                <img src={close} alt="close" />
              </div>
            </Link>
            <div className="product-div-light-title-head">
              <h2>Verification<span>Code</span></h2>
            </div>
            <div className="footer-div1-flex-input">
              <input type="text" placeholder='Enter Email' />
              <Link to={"/"}>
                <div className="footer-div1-flex-button">
                  <button>Subscribe</button>
                </div>
              </Link>
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
