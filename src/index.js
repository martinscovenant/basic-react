import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import ResetPassword from './Components/ResetPassword';
import Logout from './Components/Logout';
import EmailVerification from './Components/EmailVerification'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignupPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/email-verification" element={<EmailVerification/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
