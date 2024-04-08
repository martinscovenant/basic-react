import React, { useEffect, useState } from "react";

function EmailVerification() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleVerifyEmail = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://covenant.ahmard.com/api/v1/auth/verify-email/ehl2GHOxNYeGuZxgEvmLg",
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                }
            );
            const responseData = await response.json();

            if (response.ok) {
                // Email verification successful
                setSuccessMessage("Email verification successful");
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
            {loading && <p style={{ color: "gray" }}>verifying your account...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
    );

}

export default EmailVerification;
