import React from 'react'
import './contactus.scss'
import cornerShadow from "../../assets/images/contactUs/cornerShadow.png";
import cloud1 from "../../assets/images/contactUs/cloud1.png";
import rightShadow from "../../assets/images/contactUs/rightShadow.png";
import lock from "../../assets/images/contactUs/lock.png";
import lockbg from "../../assets/images/contactUs/lockbg.png";
import logo from "../../assets/images/contactUs/logo.png";
import instagram from "../../assets/images/contactUs/instagram.png";
import telegram from "../../assets/images/contactUs/telegram.png";
import copyright from "../../assets/images/contactUs/copyright.png";
import { Link } from 'react-router-dom';

export default function Contactus() {
    return (
        <div>
            <div className="main-div-contactus">
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
                                <h1>Contact<span>Us</span>
                                </h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-box">
                        <div className="container">
                            <div className="contact-box-input">
                                <div className="contact-box-input-flex">
                                    <input type="text" placeholder='Enter Name' />
                                    <input type="email" placeholder='Enter Email' />
                                </div>
                                <input type="text" placeholder='Enter Subject' />
                                <div className="contact-box-input-message">
                                    <textarea placeholder='Message'></textarea>
                                </div>
                                <div className="contact-box-button">
                                    <button>Submit</button>
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
                    <div className="background-div-rightShadow">
                        <img src={rightShadow} alt="rightShadow" />
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
