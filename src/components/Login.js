import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
  
    fetch('https://movers-app-server.onrender.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: usernameOrEmail,
        password,
      }),
    })
    .then(response => response.json().then(result => ({ status: response.status, body: result })))
    .then(({ status, body }) => {
      if (status === 200) {
        // Store token in localStorage
        localStorage.setItem('access_token', body.access_token);
        window.location.href = '/'; // Redirect to home or dashboard
      } else {
        setError(body.message || 'Login failed');
      }
    })
    .catch(err => {
      setError('An error occurred. Please try again later.');
    });
  };
  

  return (
    <div className="blur-background">
      <div className="login-container">
        <div className="login-form">
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username or email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <div className="or">OR</div>
          <button className="google-login">
            <a href="/SignupForm">No account? Sign up</a>
          </button>
        </div>
        <div className="welcome-section">
          <h1>Welcome Back</h1>
          <p>We appreciate your presence</p>
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1614359835514-92f8ba196357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92ZXJzJTIwdmFufGVufDB8fDB8fHww"
              alt="Truck illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
