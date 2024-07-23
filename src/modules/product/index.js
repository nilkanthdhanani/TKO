import React, { useEffect, useRef, useState } from 'react'
import './product.scss'
import cornerShadow from "../../assets/images/product/cornerShadow.png";
import cloud1 from "../../assets/images/product/cloud1.png";
import cloud2 from "../../assets/images/product/cloud2.png";
import rightShadow from "../../assets/images/product/rightShadow.png";
import lock from "../../assets/images/product/lock.png";
import lockbg from "../../assets/images/product/lockbg.png";
import logo from "../../assets/images/product/logo.png";
import product1 from "../../assets/images/product/product1.png";
import product2 from "../../assets/images/product/produt2.png";
import product3 from "../../assets/images/product/product3.png";
import product4 from "../../assets/images/product/product4.png";
import errow from "../../assets/images/product/errow.png";
import instagram from "../../assets/images/product/instagram.png";
import telegram from "../../assets/images/product/telegram.png";
import copyright from "../../assets/images/product/copyright.png";
import { Link } from 'react-router-dom';

export default function Product() {
    const [formData, setFormData] = useState({
      email: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      setFormData({
        email: '',
      });
    };

    const topRef = useRef(null);
    useEffect(() => {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);
    return (
        <div>
            <div className="main-div-product" ref={topRef}>
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
                                <h1>Our<span>Products</span>
                                </h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="container">
                            <div className="product-card-grid">
                                <div className="product-card-grid-div1">
                                    <div className="product-card-grid-div1-first">
                                        <p>Triple Infused</p>
                                        <div className="product-card-grid-div1-first-image">
                                            <img src={product1} alt="product1" />
                                        </div>
                                    </div>
                                    <div className="product-card-grid-div1-second">
                                        <div className="product-card-grid-div1-second-head">
                                            <h5>Triple Infused</h5>
                                            <Link to={"/product1"}>
                                                <div className="product-card-grid-div1-second-head-arrow">
                                                    <img src={errow} alt="errow" />
                                                </div>
                                            </Link>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </div>
                                <div className="product-card-grid-div1">
                                    <div className="product-card-grid-div1-first">
                                        <p>Torpedo</p>
                                        <div className="product-card-grid-div1-first-image">
                                            <img src={product2} alt="product2" />
                                        </div>
                                    </div>
                                    <div className="product-card-grid-div1-second">
                                        <div className="product-card-grid-div1-second-head">
                                            <h5>Torpedo</h5>
                                            <Link to={"/soon"}>
                                                <div className="product-card-grid-div1-second-head-arrow">
                                                    <img src={errow} alt="errow" />
                                                </div>
                                            </Link>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </div>
                                <div className="product-card-grid-div1">
                                    <div className="product-card-grid-div1-first">
                                        <p>Mini Rockets</p>
                                        <div className="product-card-grid-div1-first-image">
                                            <img src={product3} alt="product3" />
                                        </div>
                                    </div>
                                    <div className="product-card-grid-div1-second">
                                        <div className="product-card-grid-div1-second-head">
                                            <h5>Mini Rockets</h5>
                                            <Link to={"/product2"}>
                                                <div className="product-card-grid-div1-second-head-arrow">
                                                    <img src={errow} alt="errow" />
                                                </div>
                                            </Link>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </div>
                                <div className="product-card-grid-div1">
                                    <div className="product-card-grid-div1-first">
                                        <p>Cartridges</p>
                                        <div className="product-card-grid-div1-first-image">
                                            <img src={product4} alt="product4" />
                                        </div>
                                    </div>
                                    <div className="product-card-grid-div1-second">
                                        <div className="product-card-grid-div1-second-head">
                                            <h5>Cartridges</h5>
                                            <Link to={"/product3"}>
                                                <div className="product-card-grid-div1-second-head-arrow">
                                                    <img src={errow} alt="errow" />
                                                </div>
                                            </Link>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text</p>
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
                                        <form onSubmit={handleSubmit}>
                                            <div className="footer-div1-flex-input">
                                                <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Enter Email' required />
                                                <div className="footer-div1-flex-button">
                                                    <button>Subscribe</button>
                                                </div>
                                            </div>
                                        </form>
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
                    <div className="background-div-cloud2">
                        <img src={cloud2} alt="cloud2" />
                    </div>
                    <div className="background-div-rightShadow">
                        <img src={rightShadow} alt="rightShadow" />
                    </div>
                    <div className="background-div-parent">
                        <div className="background-div-image"></div>
                        <div className="background-div-image"></div>
                        <div className="background-div-image"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
