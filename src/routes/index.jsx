import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import DashboardLayout from "../layouts/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import Settings from "../pages/Dashboard/Settings";

import AuthLayout from "../layouts/Auth";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

// Define the routes array
const routes = [
    {
        path: "/",
        element: <Home />,
        index: true,
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            { index: true, element: <Profile /> }, 
            { path: "settings", element: <Settings /> },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />, 
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
];

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}>
                    {route.children &&
                        route.children.map((child, i) => (
                            <Route key={i} path={child.path} element={child.element} index={child.index} />
                        ))}
                </Route>
            ))}
        </Routes>
    );
};

export default AppRoutes;
