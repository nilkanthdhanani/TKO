import React from 'react'
import './commingsoon.scss';
import { Link } from 'react-router-dom';

export default function CommingSoon() {
  return (
    <div>
      <div className="backgrond-div-soon">
        <div className="hero-banner">
          <div className="hero-banner-container">
            <div className="hero-banner-first">
              <div className="hero-banner-moon">
                <h1>COming Soon</h1>
                <div className="authintication-box-input">
                  <div className="authintication-box-input-flex">
                    <div className="authintication-box-input-flex-input">
                      <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="authintication-box-input-flex-button">
                      <Link to={"/"}>
                        <button>Notify Me</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
