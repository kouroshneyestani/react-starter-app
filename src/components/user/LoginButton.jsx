import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

// Button component for logging in with Google
const LoginButton = () => {
    // Access the loginWithGoogle function from the AuthContext
    const { loginWithGoogle } = useAuth();

    useEffect(() => {
        const checkUserLocation = async () => {
            try {
                const response = await axios.get("https://ipapi.co/json/");
                const { ip, country_name, country_code } = response.data;

                console.log(`IP: ${ip}, Country: ${country_name} (${country_code})`);

                // Block users from Iran (ISO country code: IR)
                if (country_code === "IR") {
                    alert("Access Denied. Your location is restricted.");
                    // Optionally redirect them elsewhere or close the app.
                }
            } catch (error) {
                console.error("Error fetching IP data:", error);
            }
        };

        checkUserLocation();
    }, []);

    return <button onClick={loginWithGoogle}>Login with Google</button>;
};

export default LoginButton;
