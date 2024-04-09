import React, { useState } from 'react';

function PasswordReset() {
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordReset = async () => {
    try {
      const response = await fetch('https://covenant.ahmard.com/api/v1/auth/send-password-reset-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const responseData = await response.json();
      
      if (response.ok) {
        setSuccessMessage('we sent a verify link to ur email please click to continue');
      } else {
        setError(responseData.message || 'Failed to verify email. Please check your credentials.');
      }
    } catch (error) {
      setError('Failed to verify email. Please check your internet connection.');
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>verify your email</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="signup-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handlePasswordReset} className="signup-button">submit</button>
    </div>
  );
}

export default PasswordReset;
