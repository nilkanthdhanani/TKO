import React from 'react'
import './commingsoon.scss';
import { useNavigate } from 'react-router-dom';

export default function CommingSoon() {
  const [email, setEmail] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      console.log({ email });
      setEmail('');
      navigate('/');
    } else {
      alert('Please enter a valid email address.');
    }
  };
  return (
    <div>
      <div className="backgrond-div-soon">
        <div className="hero-banner">
          <div className="hero-banner-container">
            <div className="hero-banner-first">
              <div className="hero-banner-moon">
                <h1>COming Soon</h1>
                <div className="authintication-box-input">
                  <form onSubmit={handleSubmit}>
                    <div className="authintication-box-input-flex">
                      <div className="authintication-box-input-flex-input">
                      <input type="email" onChange={handleChange} value={email} placeholder='Enter your email' required />
                      </div>
                      <div className="authintication-box-input-flex-button">
                        <button>Notify Me</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
