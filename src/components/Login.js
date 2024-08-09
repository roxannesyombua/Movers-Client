import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {

  const navigate = useNavigate();

  const handleBookingRedirect = () => {
    alert("successful login")
    navigate('/Booking');
  };

  return (
    <div className="blur-background">
      <div className="login-container">
        <div className="login-form">
          <h2>log in</h2>
          <form>
            <input type="text" placeholder="Username or email" />
            <input type="password" placeholder="Password" />
            <button type="submit" onClick={handleBookingRedirect}>Submit</button>
          </form>
          <div className="or">OR</div>
          <button className="google-login">
            <a href='/SignupForm'> No account? Sign up</a> 
          </button>
        </div>
        <div className="welcome-section">
          <h1>Welcome Back</h1>
          <p>We appreciate your presence</p>
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1614359835514-92f8ba196357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92ZXJzJTIwdmFufGVufDB8fDB8fHww" alt="Truck illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;