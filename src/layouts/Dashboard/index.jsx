import { Outlet } from "react-router";

function Layout() {
    return (
        <div>
            <h1>Dashboard Layout</h1>
            <Outlet />
        </div>
    );
}

export default Layout;
