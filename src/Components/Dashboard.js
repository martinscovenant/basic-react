import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 


function Dashboard() {
  return (
    <div className="dashboard-container">
  <header className="dashboard-header">
  <button className="logout-button"><Link to="/Logout" className="logout-link">Logout</Link></button>

    <h1>Welcome to the Dashboard</h1>
  </header>
  <main className="dashboard-content">
    {/* Dashboard content goes here */}
  </main>
  <footer className="dashboard-footer">
    <p>© 2024 Dashboard. All rights reserved.</p>
  </footer>
</div>

  );
}

export default Dashboard;
