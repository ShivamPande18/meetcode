import React from 'react'
import { Outlet, Navigate } from "react-router-dom"

let isLoggedIn = true;

export function setIsLogin() {
    isLoggedIn = true;
}

function ProtectedRoute() {
    return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute