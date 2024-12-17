import { NavLink } from "react-router";
import LoginButton from "../user/LoginButton";
import LogoutButton from "../user/LogoutButton";
import UserProfile from "../user/UserProfile";
import { useAuth } from "../../context/AuthContext";

function Header() {
    // Define navigation links as an array
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Dashboard", path: "/dashboard" },
        { label: "Login", path: "/auth/login" },
        { label: "Register", path: "/auth/register" },
    ];

    const { user } = useAuth();

    return (
        <header className="flex items-center justify-between">
            <nav className="flex items-center gap-4">
                {/* Map through navLinks to create menu items */}
                {navLinks.map((link) => (
                    <NavLink key={link.path} to={link.path} className={({ isActive }) => (isActive ? "active" : "")}>
                        {link.label}
                    </NavLink>
                ))}
            </nav>
            <>
                {user ? (
                    // If user is logged in, show their profile and a logout button
                    <>
                        <UserProfile />
                        <LogoutButton />
                    </>
                ) : (
                    // If no user is logged in, show a login button
                    <LoginButton />
                )}
            </>
        </header>
    );
}

export default Header;
