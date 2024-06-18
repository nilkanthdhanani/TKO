import React from 'react'
import './productdetail3.scss';
import shadow from "../../assets/images/productDetail3/shadow.png";
import logo from "../../assets/images/productDetail3/logo.png";
import cart from "../../assets/images/productDetail3/cart.png";
import search from "../../assets/images/productDetail3/search.png";
import note from "../../assets/images/productDetail3/note.png";
import productbase from "../../assets/images/productDetail3/productbase.png";
import shadowLeft from "../../assets/images/productDetail3/shadowLeft.png";
import shadowRight from "../../assets/images/productDetail3/shadowRight.png";
import vape from "../../assets/images/productDetail3/vape.png";
import copyright from "../../assets/images/productDetail3/copyright.png";
import instagram from "../../assets/images/productDetail3/instagram.png";
import telegram from "../../assets/images/productDetail3/telegram.png";
import { Link } from 'react-router-dom';

export default function ProductDetail3() {
  return (
    <div>
      <div className="product-background">
        <div className="product-background-shadow">
          <img src={shadow} alt="shadow" />
        </div>
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
                <div className="header-div-flex-menu">
                  <img src={note} alt="note" />
                  <Link to={"/cart"}>
                    <img src={cart} alt="cart" />
                  </Link>
                  <img src={search} alt="search" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-banner">
          <div className="hero-banner-head">
            <div className="first-div-head-main">
              <div className="first-div-head-main-title">
                <h1>Mini<span>Rockets</span>
                </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                <div className="hero-banner-moon-button">
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-banner-image">
            <img src={productbase} alt="productbase" />
          </div>
        </div>
      </div>
      <div className="cb">
        <div className="cb-shadowleft">
          <img src={shadowLeft} alt="shadowLeft" />
        </div>
        <div className="cb-shadowright">
          <img src={shadowRight} alt="shadowRight" />
        </div>
        <div className="cb-contant">
          <div className="cb-contant-detail">
            <div className="container6">
              <div className="cb-contant-detail-grid1">
                <div className="cb-contant-detail-grid1-div1">
                  <img src={vape} alt="vape" />
                </div>
                <div className="cb-contant-detail-grid1-div2">
                  <h3>Pure, clean cannabis oil in convenient ready-to-hit disposable pens</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                </div>
              </div>
              <div className="cb-contant-detail-grid2">
                <div className="cb-contant-detail-grid2-div1">
                  <div className="cb-contant-detail-grid2-div1-head1">
                    <h3>The easiest way to smoke TKO on-the-go</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                  </div>
                </div>
                <div className="cb-contant-detail-grid2-div2">
                  <img src={vape} alt="vape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-footer">
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
                <Link target='blank' to={"https://www.instagram.com/"}>
                  <img src={instagram} alt="instagram" />
                </Link>
                <Link target='blank' to={"https://web.telegram.org/a/"}>
                  <img src={telegram} alt="telegram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
