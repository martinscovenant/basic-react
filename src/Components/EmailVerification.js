import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function EmailVerification() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const token = new URLSearchParams(window.location.search).get('token');
    const handleVerifyEmail = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://covenant.ahmard.com/api/v1/auth/email-verification/${token}`,
                {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                }
            );
            const responseData = await response.json();

            if (response.ok) {
                // Email verification successful
                setSuccessMessage("Email verification successful");

                setTimeout(() => navigate('/LoginPage'), 5000)
            } else {
                // Email verification failed
                setError(responseData.message || "Failed to verify email");
            }

            setLoading(false);
        } catch (error) {
            setLoading(false); // Set loading state to false in case of an error
            setError("Failed to verify email");
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await handleVerifyEmail();
        };
        fetchData();
    }, []); // Empty dependency array to run only once

    return (
        <div>
            <h2>Account Verification</h2>
            {loading && <p style={{color: "gray"}}>verifying your account...</p>}
            {error && <p style={{color: "red"}}>{error}</p>}
            {successMessage && <p style={{color: "green"}}>{successMessage}</p>}
        </div>
    );

}

export default EmailVerification;
