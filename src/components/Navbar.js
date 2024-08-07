import React from 'react';
import './Navbar.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="top-bar">
        <p>Welcome to movers | 10 years experience | How to find us | Give us feedback</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">MOVERS</div>
        <ul className="nav-links">
          <li><a href="#" className="active">HOME</a></li>
          <li><a href="Services">Services</a></li>
          <li><a href="Contact">CONTACT US</a></li>
        </ul>
        <div className="auth-buttons">
          <a href='/SignupForm'>
          <button className="signup-btn">SignUp</button>
          </a>
          <a href='/Login'>
          <button className="signup-btn">Login</button>
          </a>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
