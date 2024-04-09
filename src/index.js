import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import ResetPassword from './Components/ResetPassword';
import Logout from './Components/Logout';
import EmailVerification from './Components/EmailVerification'
import PasswordReset from './Components/PasswordReset';
import Dashboard from './Components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route exact path="/" element={<SignupPage/>}/>
            <Route path='/dashboard' element={<Dashboard />}  />
            <Route path="/loginpage" element={<LoginPage/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/email-verification" element={<EmailVerification/>}/>
            <Route path="passwordreset" element={<PasswordReset/>}/>
        </Routes>
    </Router>
);

reportWebVitals();
