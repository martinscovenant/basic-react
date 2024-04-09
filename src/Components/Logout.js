import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import './Dashboard.css'

function Logout() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('https://covenant.ahmard.com/api/v1/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        
        })
      });
 
      const responseData = await response.json();

      if (response.ok) {
        setMessage(responseData.message);
        setTimeout(() => navigate('/LoginPage'), 5000)
      } else {
        setError(responseData.message || 'Failed to logout');
      }
    } catch (error) {
      setError('Failed to logout');
      console.error(error);
    }
  };

  return (
    <div className="cotainer">
      <h2>Logout</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default Logout;
