import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <div className="dashboard">
    
        <h1>Welcome to the Dashboard</h1>
      <div className="container">
        <Link to="/Logout" className="button">logout</Link>
      </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
