import React, { useEffect, useRef, useState } from 'react'
import './mycart.scss'
import logo from "../../assets/images/myCart/logo.png";
import instagram from "../../assets/images/myCart/instagram.png";
import telegram from "../../assets/images/myCart/telegram.png";
import copyright from "../../assets/images/myCart/copyright.png";
import cart from "../../assets/images/myCart/cart.png";
import note from "../../assets/images/myCart/note.png";
import search from "../../assets/images/myCart/search.png";
import minus from "../../assets/images/myCart/minus.png";
import pluse from "../../assets/images/myCart/pluse.png";
import trash from "../../assets/images/myCart/delete.png";
import product1 from "../../assets/images/myCart/product1.png";
import grpcicle from "../../assets/images/myCart/grpcicle.png";
import { Link } from 'react-router-dom';

export default function Mycart() {
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
            <div className="main-div-cart" ref={topRef}>
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
                                <h1>My<span>Cart</span>
                                </h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item">
                        <div className="cart-item-container">
                            <div className="card-item-box-main-grid">
                                <div className="card-item-box-main">
                                    <div className="cart-item-box-title-main">
                                        <div className="cart-item-box-title-main-first">
                                            <h3>Cart Item</h3>
                                            <div className="table-div">
                                                <table cellPadding={0} cellSpacing={0}>
                                                    <tr className="table-head">
                                                        <th>Name</th>
                                                        <th>Qty</th>
                                                        <th>Price</th>
                                                        <th></th>
                                                    </tr>
                                                    <tr className="table-data">
                                                        <td className="table-data1">
                                                            <div className="table-data1-main">
                                                                <img src={product1} alt="product1" />
                                                                <p>Triple Infused</p>
                                                            </div>
                                                        </td>
                                                        <td className="table-data2">
                                                            <div className="table-data2-main">
                                                                <div className="decrease">
                                                                    <img src={minus} alt="minus" />
                                                                </div>
                                                                <p>01</p>
                                                                <div className="increase">
                                                                    <img src={pluse} alt="pluse" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="table-data3">
                                                            <div className="table-data3-main">
                                                                <p>$1000</p>
                                                            </div>
                                                        </td>
                                                        <td className="table-data4">
                                                            <div className="table-data4-main">
                                                                <img src={trash} alt="trash" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="cart-item-box-title-main-last">
                                            <div className="sub-total-counter-div-main">
                                                <h2>Subtotal</h2>
                                                <p>$1000</p>
                                            </div>
                                            <div className="sub-total-counter-div-main-two">
                                                <h2>Shipping</h2>
                                                <p>Free</p>
                                            </div>
                                            <div className="sub-total-counter-div-main-three">
                                                <h2>Total</h2>
                                                <p>$1000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-item-box-main-two">
                                    <div className="card-item-box-border">
                                        <div className="card-item-box-main-two-div1">
                                            <h1>Payment Detail</h1>
                                            <p>Select payment method</p>
                                            <button type='submit'><img src={grpcicle} alt="grpcicle" />COD</button>
                                        </div>
                                        <div className="card-item-box-main-two-div2">
                                            <Link to={"/success"}>
                                                <button type='submit'>Checkout</button>
                                            </Link>
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
                    <div className="background-div-parent">
                        <div className="background-div-image"></div>
                        <div className="background-div-image"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
