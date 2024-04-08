import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('https://covenant.ahmard.com/api/v1/auth/reset-password/oQs5LJeLUQc0IJ-yLitTN', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:{
          password,
          password_confirmation: confirmPassword
        }
      });

      const responseData = await response.json();

      if (response.ok) {
        setSuccessMessage('Password reset successfully!');
      } else {
        setError(responseData.message || 'Failed to reset password');
      }
    } catch (error) {
      setError('Failed to reset password');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Reset Password</button>
        <Link to="/Logout">Sign In</Link>
      </form>
    </div>
  );
}

export default ResetPassword;
