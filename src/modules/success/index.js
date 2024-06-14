import React from 'react'
import './success.scss';
import logo from "../../assets/images/succes/logo.png";
import lockbg from "../../assets/images/succes/lockbg.png";
import lock from "../../assets/images/succes/lock.png";
import copyright from "../../assets/images/succes/copyright.png";
import instagram from "../../assets/images/succes/instagram.png";
import telegram from "../../assets/images/succes/telegram.png";
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div>
      <div className="backgrond-div">
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
        <div className="hero-banner">
          <div className="hero-banner-container">
            <div className="hero-banner-first">
              <div className="hero-banner-moon">
                <h1>Success! Your product is authentic</h1>
                <div className="hero-banner-moon-pera">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="hero-banner-moon-button">
                  <Link to={"/"}>
                    <button>Back to home</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-banner-head">
              <div className="first-div-head-main">
                <div className="first-div-head-main-title">
                  <h2>Lab<span>Results</span>
                  </h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="results-div-success">
        <div className="container">
          <div className="results-div-grid">
            <div className="results-div-grid1">
              <div className="results-div-grid1-button1">
                <button>Originals</button>
              </div>
              <div className="results-div-grid1-button2">
                <button>Disposables</button>
              </div>
              <div className="results-div-grid1-button3">
                <button>HTFSE SAUCE</button>
              </div>
            </div>
            <div className="results-div-grid2">
              <div className="results-div-grid2-head">
                <h6>ORIGINALS</h6>
              </div>
              <div className="results-div-grid2-head-list">
                <button>Animal Mints</button>
                <button>Cake Batter</button>
                <button>Forbidden Fruit</button>
                <button>Grape Pie</button>
                <button>Grapefruit</button>
                <button>Jack Herer</button>
                <button>Limeskunk</button>
                <button>Nerds</button>
                <button>Purple Punch</button>
                <button>Snozzberry</button>
                <button>Sundae Driver</button>
                <button>Strawberry Cough</button>
                <button>White Runtz</button>
                <button>ATF</button>
                <button>Casey Jones</button>
                <button>Garanimals</button>
              </div>
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
