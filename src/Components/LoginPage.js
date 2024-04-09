import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import './Signup.css'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://covenant.ahmard.com/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const responseData = await response.json();
      
      if (response.ok) {
        
        setSuccessMessage('Login successful');
        setTimeout(() => navigate('/Dashboard'), 5000)
      } else {
       
        setError(responseData.message || 'Failed to login. Please check your credentials.');
      }
    } catch (error) {
    
      setError('Failed to login. Please check your credentials.');
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className='signup-form'>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      </div>
      <button onClick={handleLogin} className="signup-button">Login</button>
      <p  className="login-link">Forgotten password? <Link to="/PasswordReset">Reset password</Link></p>
    </div>
  );
}

export default LoginPage;
