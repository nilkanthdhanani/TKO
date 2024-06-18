import React from 'react'
import './productdetail2.scss';
import shadow from "../../assets/images/productDetail2/shadow.png";
import logo from "../../assets/images/productDetail2/logo.png";
import cart from "../../assets/images/productDetail2/cart.png";
import search from "../../assets/images/productDetail2/search.png";
import note from "../../assets/images/productDetail2/note.png";
import productbase from "../../assets/images/productDetail2/productbase.png";
import shadowLeft from "../../assets/images/productDetail2/shadowLeft.png";
import shadowRight from "../../assets/images/productDetail2/shadowRight.png";
import vape from "../../assets/images/productDetail2/vape.png";
import blueSeriesPlasticBox2 from "../../assets/images/productDetail2/blueSeriesPlasticBox2.png";
import straightLine from "../../assets/images/productDetail2/straightLine.png";
import topLine from "../../assets/images/productDetail2/topLine.png";
import bottomLine from "../../assets/images/productDetail2/bottomLine.png";
import copyright from "../../assets/images/productDetail2/copyright.png";
import instagram from "../../assets/images/productDetail2/instagram.png";
import telegram from "../../assets/images/productDetail2/telegram.png";
import productVideo from "../../assets/images/productDetail2/productVideo.gif";
import { Link } from 'react-router-dom';

export default function ProductDetail2() {
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
                <h1>Triple<span>Infused</span>
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
      <div className="collection-background">
        <div className="collection-background-shadowleft">
          <img src={shadowLeft} alt="shadowLeft" />
        </div>
        <div className="collection-background-shadowright">
          <img src={shadowRight} alt="shadowRight" />
        </div>
        <div className="collection-background-contant">
          <div className="collection-background-contant-new">
            <div className="container5">
              <div className="collection-background-contant-new-head">
                <h2>Our All New<span>Vape Collection</span>
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="collection-background-contant-new-image">
                <img src={productVideo} alt="productVideo" />
              </div>
            </div>
          </div>
          <div className="collection-background-contant-detail">
            <div className="container6">
              <div className="collection-background-contant-detail-head">
                <h2>Upgrade<span>Tech, Features & Formulas</span>
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="collection-background-contant-detail-grid1">
                <div className="collection-background-contant-detail-grid1-div1">
                  <img src={vape} alt="vape" />
                  <div className="straightline">
                    <img src={straightLine} alt="straightLine" />
                  </div>
                </div>
                <div className="collection-background-contant-detail-grid1-div2">
                  <h3>40 unique flavors</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
              </div>
              <div className="collection-background-contant-detail-grid2">
                <div className="collection-background-contant-detail-grid2-div1">
                  <div className="collection-background-contant-detail-grid2-div1-head1">
                    <h3>Anti-counterfeit tech</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className="topline">
                      <img src={topLine} alt="topLine" />
                    </div>
                  </div>
                  <div className="collection-background-contant-detail-grid2-div1-head2">
                    <h3>Hard-shell plastic case</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className="bottomline">
                      <img src={bottomLine} alt="bottomLine" />
                    </div>
                  </div>
                </div>
                <div className="collection-background-contant-detail-grid2-div2">
                  <img src={blueSeriesPlasticBox2} alt="blueSeriesPlasticBox2" />
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
