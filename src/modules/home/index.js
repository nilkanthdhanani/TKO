import React from 'react'
import './home.scss';
import ellipse from "../../assets/images/home/ellipse.png";
import ellipse3 from "../../assets/images/home/ellipse3.png";
import ellipse2 from "../../assets/images/home/ellipse2.png";
import cloud1 from "../../assets/images/home/cloud1.png";
import cloud2 from "../../assets/images/home/cloud2.png";
import logo from "../../assets/images/home/logo.png";
import lockbg from "../../assets/images/home/lockbg.png";
import lock from "../../assets/images/home/lock.png";
import redbox from "../../assets/images/home/redbox.png";
import ellipse673 from "../../assets/images/home/ellipse673.png";
import light from "../../assets/images/home/light.png";
import light2 from "../../assets/images/home/light2.png";
import product1 from "../../assets/images/home/product1.png";
import product2 from "../../assets/images/home/product2.png";
import product3 from "../../assets/images/home/product3.png";
import product4 from "../../assets/images/home/product4.png";
import product5 from "../../assets/images/home/product5.png";
import product6 from "../../assets/images/home/product6.png";
import vector1 from "../../assets/images/home/vector1.png";
import vector2 from "../../assets/images/home/vector2.png";
import vector3 from "../../assets/images/home/vector3.png";
import instagram from "../../assets/images/home/instagram.png";
import telegram from "../../assets/images/home/telegram.png";
import copyright from "../../assets/images/home/copyright.png";
import tripleInfusedPrerolls from "../../assets/images/home/tripleInfusedPrerolls.png";
import cartridges from "../../assets/images/home/cartridges.png";
import thcaDiamond from "../../assets/images/home/thcaDiamond.png";
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div>
      <div className="first-div">
        <div className="first-div-contant">
          <div className="header">
            <div className="header-container">
              <div className="header-div">
                <div className="header-div-flex">
                  <Link to={"/"}>
                    <div className="header-div-flex-logo">
                      <img src={logo} alt="logo" />
                    </div>
                  </Link>
                  <div className="header-div-flex-ancer">
                    <Link to={"/auth"}>Authenticate</Link>
                    <Link to={"/product"}>Products</Link>
                    <Link to={"/labresults"}>Lab Results</Link>
                    <Link to={"/contactus"}>Contact Us</Link>
                  </div>
                  <Link to={"/verification"}>
                    <div className="header-div-flex-lock">
                      <img src={lockbg} alt="lockbg" />
                      <div className="header-div-flex-lock-img">
                        <img src={lock} alt="lock" />
                      </div>
                    </div>
                  </Link>
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
      <div className="second-div-authintication">
        <div className="authintication">
          <div className="container">
            <div className="authintication-box">
              <h2>Authenticate</h2>
              <div className="authintication-box-input">
                <div className="authintication-box-input-flex">
                  <div className="authintication-box-input-flex-input">
                    <input type="number" placeholder='Enter Code' />
                  </div>
                  <div className="authintication-box-input-flex-button">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-div-main"></div>
      <div className="product-div">
        <div className="product-div-light">
          <img src={light} alt="light" />
        </div>
        <div className="product-div-light2">
          <img src={light2} alt="light2" />
        </div>
        <div className="container2">
          <div className="product-div-light-title">
            <div className="product-div-light-title-head">
              <h2>Our<span>Product</span></h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="product-div-light-grid">
            <div className="product-div-light-grid-box">
              <div className="product-div-light-grid-box-head">
                <img src={tripleInfusedPrerolls} alt="tripleInfusedPrerolls" />
              </div>
              <div className="product-div-light-grid-box-image">
                <img src={product1} alt="product1" />
              </div>
            </div>
            <div className="product-div-light-grid-box">
              <div className="product-div-light-grid-box-head">
                <img src={cartridges} alt="cartridges" />
              </div>
              <div className="product-div-light-grid-box-image">
                <img src={product2} alt="product2" />
              </div>
            </div>
            <div className="product-div-light-grid-box">
              <div className="product-div-light-grid-box-head">
                <img src={thcaDiamond} alt="thcaDiamond" />
              </div>
              <div className="product-div-light-grid-box-image">
                <img src={product3} alt="product3" />
              </div>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="container3">
            <div className="features-div-light-title">
              <div className="features-div-light-title-head">
                <h2>Our<span>Features</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="features-div-light-grid">
              <div className="features-div-light-grid-box">
                <div className="features-div-light-grid-box-vector">
                  <img src={vector1} alt="vector1" />
                </div>
                <h4>Experience</h4>
                <p>Enjoy a vast variey of the hardest-hitting cannabis strains</p>
              </div>
              <div className="features-div-light-grid-box">
                <div className="features-div-light-grid-box-vector">
                  <img src={vector2} alt="vector2" />
                </div>
                <h4>Authenticate</h4>
                <p>Ensure you're smoking the best with our new verification system</p>
              </div>
              <div className="features-div-light-grid-box">
                <div className="features-div-light-grid-box-vector">
                  <img src={vector3} alt="vector3" />
                </div>
                <h4>Certify</h4>
                <p>Learn more about your product from our certified lab results</p>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus">
          <div className="aboutus-div-light-title">
            <div className="aboutus-div-light-title-head">
              <h2><span>About</span>Us</h2>
              <p>TKO has been focused on product integrity since day one, and we’ve risen above because of our commitment to quality. Highly potent premium THC featuring the industry’s best terpenes are standard in all of our products. Our clean cannabis oil is expertly crafted for consistency, always independently lab tested for full transparency</p>
            </div>
          </div>
          <div className="aboutus-div-light-grid">
            <div className="aboutus-div-light-grid-box">
              <img src={product4} alt="product4" />
            </div>
            <div className="aboutus-div-light-grid-box">
              <img src={product1} alt="product1" />
            </div>
            <div className="aboutus-div-light-grid-box">
              <img src={product3} alt="product3" />
            </div>
            <div className="aboutus-div-light-grid-box">
              <img src={product6} alt="product6" />
            </div>
            <div className="aboutus-div-light-grid-box">
              <img src={product5} alt="product5" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-div1">
            <div className="footer-div1-img">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer-div1-flex">
              <div className="footer-div1-flex-ancer">
                <Link to={"/auth"}>Authenticate</Link>
                <Link to={"/product"}>Products</Link>
                <Link to={"/labresults"}>Lab Results</Link>
                <Link to={"/contactus"}>Contact Us</Link>
              </div>
              <div className="footer-div1-flex-input-main">
                <div className="footer-div1-flex-input">
                  <input type="text" placeholder='Enter Email' />
                  <div className="footer-div1-flex-button">
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-div2">
            <div className="footer-div2-copyright">
              <img src={copyright} alt="copyright" />
              <p>2023 TKO Extracts</p>
            </div>
            <div className="footer-div2-icon">
              <img src={instagram} alt="instagram" />
              <img src={telegram} alt="telegram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
