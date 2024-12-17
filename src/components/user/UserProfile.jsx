import React from "react";
import { useAuth } from "../../context/AuthContext";

// Component to display the currently logged-in user's profile
const UserProfile = () => {
    // Access the user object from the AuthContext
    const { user } = useAuth();

    // If no user is logged in, render nothing
    if (!user) return <p>Please log in to view your profile.</p>;

    // Display user information (profile picture, name, email, phone number, etc.)
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            {console.log(user)} {/* This logs the user object to the console */}
            {/* Display the user's profile picture */}
            <img
                src={user.photoURL}
                alt={user.displayName}
                style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginBottom: "15px",
                }}
            />
            {/* Display the user's name */}
            <h3>{user.displayName}</h3>
            {/* Display the user's email */}
            <p>Email: {user.email}</p>
            {/* Display the user's phone number, if available */}
            <p>Phone Number: {user.phoneNumber || "Not provided"}</p>
            {/* Display the user's last sign-in time */}
            <p>
                Last Sign-In:{" "}
                {new Date(user.metadata.lastSignInTime).toLocaleString()}
            </p>
        </div>
    );
};

export default UserProfile;
