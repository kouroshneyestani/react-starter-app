import { createContext, useContext, useState, useEffect } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // State to store the currently logged-in user
    const [user, setUser] = useState(null);

    // UseEffect hook to listen for changes in the user's authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // Set the user state to the current authenticated user
            setUser(currentUser);
        });

        // Cleanup function to unsubscribe from the listener
        return () => unsubscribe();
    }, []);

    // Function to log in the user using Google Sign-In
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    // Function to log out the currently logged-in user
    const logout = async () => {
        await signOut(auth);
    };

    // Provide the user state and authentication functions to children components
    return (
        <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to access the authentication context
export const useAuth = () => useContext(AuthContext);
