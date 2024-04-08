import React, { useState } from 'react';

function Logout() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      const response = await fetch('https://example.com/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // You can pass any necessary data for the logout process, if required by the API
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
    <div>
      <h2>Logout</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
