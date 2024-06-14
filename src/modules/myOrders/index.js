import React from 'react'
import './myorders.scss'
import logo from "../../assets/images/myOrders/logo.png";
import instagram from "../../assets/images/myOrders/instagram.png";
import telegram from "../../assets/images/myOrders/telegram.png";
import copyright from "../../assets/images/myOrders/copyright.png";
import cart from "../../assets/images/myOrders/cart.png";
import note from "../../assets/images/myOrders/note.png";
import search from "../../assets/images/myOrders/search.png";
import { Link } from 'react-router-dom';

export default function Myorders() {
    return (
        <div>
            <div className="main-div-order">
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
                    <div className="first-div-head">
                        <div className="first-div-head-main">
                            <div className="first-div-head-main-title">
                                <h1>My<span>Orders</span>
                                </h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="authintication">
                        <div className="container">
                            <div className="authintication-box">
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
                    <div className="ord-nmb">
                        <div className="ord-nmb-lst-container">
                            <div className="order-nmb-section-main">
                                <div className="order-number-list-div-main">
                                    <div className="ord-list-nmb-one">
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Order Number</h1>
                                            <p>1001</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Product</h1>
                                            <p>Triple Infused</p>
                                        </div>
                                    </div>
                                    <div className="ord-list-nmb-two">
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Total</h1>
                                            <p>1001</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Date</h1>
                                            <p>20/03/2024</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Stats</h1>
                                            <p>Pending</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-number-list-div-main">
                                    <div className="ord-list-nmb-one">
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Order Number</h1>
                                            <p>1001</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Product</h1>
                                            <p>Triple Infused</p>
                                        </div>
                                    </div>
                                    <div className="ord-list-nmb-two">
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Total</h1>
                                            <p>1001</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Date</h1>
                                            <p>20/03/2024</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Stats</h1>
                                            <p>Pending</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-number-list-div-main">
                                    <div className="ord-list-nmb-one">
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Order Number</h1>
                                            <p>1001</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Product</h1>
                                            <p>Triple Infused</p>
                                        </div>
                                    </div>
                                    <div className="ord-list-nmb-two">
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Total</h1>
                                            <p>1001</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Date</h1>
                                            <p>20/03/2024</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Stats</h1>
                                            <p>Pending</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-number-list-div-main">
                                    <div className="ord-list-nmb-one">
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Order Number</h1>
                                            <p>1001</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Product</h1>
                                            <p>Triple Infused</p>
                                        </div>
                                    </div>
                                    <div className="ord-list-nmb-two">
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Total</h1>
                                            <p>1001</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Date</h1>
                                            <p>20/03/2024</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Stats</h1>
                                            <p>Pending</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-number-list-div-main">
                                    <div className="ord-list-nmb-one">
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Order Number</h1>
                                            <p>1001</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Product</h1>
                                            <p>Triple Infused</p>
                                        </div>
                                    </div>
                                    <div className="ord-list-nmb-two">
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Total</h1>
                                            <p>1001</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Date</h1>
                                            <p>20/03/2024</p>
                                        </div>
                                        <div className="ord-line-inner-frst-box">
                                            <h1>Stats</h1>
                                            <p>Pending</p>
                                        </div>
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
                <div className="background-div">
                    <div className="background-div-parent">
                        <div className="background-div-image"></div>
                        <div className="background-div-image"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
