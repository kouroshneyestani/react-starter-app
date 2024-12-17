import React from "react";
import { useAuth } from "../../context/AuthContext";

// Button component for logging out the user
const LogoutButton = () => {
    // Access the logout function from the AuthContext
    const { logout } = useAuth();

    return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
