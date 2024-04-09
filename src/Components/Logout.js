import React, { useState } from 'react';
import './Dashboard.css'

function Logout() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      const response = await fetch('https://example.com/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        
        })
      });
 
      const responseData = await response.json();

      if (response.ok) {
        setMessage(responseData.message);
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
      <button onClick={handleLogout} className="button">Logout</button>
    </div>
  );
}

export default Logout;
