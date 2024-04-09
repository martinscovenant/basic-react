import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";


function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

const token = new URLSearchParams(window.location.search).get('token');
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`https://covenant.ahmard.com/api/v1/auth/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({
          password,
          password_confirmation: confirmPassword
        })
      });

      const responseData = await response.json();

      if (response.ok) {
        setSuccessMessage('Password reset successfully!');
        setTimeout(() => navigate('/LoginPage'), 5000)
      } else {
        setError(responseData.message || 'Failed to reset password');
      }
    } catch (error) {
      setError('Failed to reset password');
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Reset Password</h2>
      {error && <p  className="error-message">{error}</p>}
      {successMessage && <p  className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div  className="signup-form">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
         <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        </div>
        <button type="submit"  className="signup-button">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
