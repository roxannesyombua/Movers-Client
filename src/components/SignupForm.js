import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');
        setSuccess('');

        fetch('https://movers-app-server.onrender.com/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw new Error(error.message || 'Registration failed');
                });
            }
            return res.json();
        })
        .then(result => {
            setSuccess('Registration successful!');
            setUsername('');
            setEmail('');
            setPassword('');
            navigate('/'); // Redirect to home page after successful registration
        })
        .catch(error => {
            setError(error.message || 'An error occurred. Please try again later.');
        });
    };

    return (
        <div className="signup-container">
            <div className="image-section">
                <div className="image-text">
                    <h1>Create your account</h1>
                    <p>Move with ease</p>
                </div>
            </div>
            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <h2>SIGN UP</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">SIGN UP</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <div className="or-divider">OR</div>
                <button className="google-signup">
                    <a href='/Login'>Have an account? Login</a>
                </button>
            </div>
        </div>
    );
};

export default SignupForm;
