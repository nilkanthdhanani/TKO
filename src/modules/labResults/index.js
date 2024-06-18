import React from 'react'
import './labresult.scss'
import cornerShadow from "../../assets/images/labResults/cornerShadow.png";
import cloud1 from "../../assets/images/labResults/cloud1.png";
import leftShadow from "../../assets/images/labResults/leftShadow.png";
import lock from "../../assets/images/labResults/lock.png";
import lockbg from "../../assets/images/labResults/lockbg.png";
import logo from "../../assets/images/labResults/logo.png";
import instagram from "../../assets/images/labResults/instagram.png";
import telegram from "../../assets/images/labResults/telegram.png";
import copyright from "../../assets/images/labResults/copyright.png";
import { Link } from 'react-router-dom';

export default function Labresults() {
    return (
        <div>
            <div className="main-div-labresult">
                <div className="contant-div">
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
                                <h1>Lab<span>Results</span>
                                </h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="results-div">
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
                <div className="background-div">
                    <div className="background-div-cornerShadow">
                        <img src={cornerShadow} alt="cornerShadow" />
                    </div>
                    <div className="background-div-cloud1">
                        <img src={cloud1} alt="cloud1" />
                    </div>
                    <div className="background-div-leftShadow">
                        <img src={leftShadow} alt="leftShadow" />
                    </div>
                    <div className="background-div-parent">
                        <div className="background-div-image"></div>
                        <div className="background-div-image"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
