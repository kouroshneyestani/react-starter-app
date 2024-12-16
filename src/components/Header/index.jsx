import { NavLink } from "react-router";

function Header() {
    // Define navigation links as an array
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Dashboard", path: "/dashboard" },
        { label: "Login", path: "/auth/login" },
        { label: "Register", path: "/auth/register" },
    ];

    return (
        <nav className="flex items-center gap-4">
            {/* Map through navLinks to create menu items */}
            {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className={({ isActive }) => (isActive ? "active" : "")}>
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
}

export default Header;
