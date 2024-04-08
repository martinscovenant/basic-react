import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://covenant.ahmard.com/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const responseData = await response.json();
      
      if (response.ok) {
        // Successful login
        setSuccessMessage('Login successful');
      } else {
        // Login failed
        setError(responseData.message || 'Failed to login. Please check your credentials.');
      }
    } catch (error) {
      // Error occurred
      setError('Failed to login. Please check your credentials.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>Forgotten password? <Link to="/ResetPassword">Reset password</Link></p>
    </div>
  );
}

export default LoginPage;
