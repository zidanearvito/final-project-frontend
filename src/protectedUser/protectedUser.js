import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedUser = ({ component: Component, ...props }) => {
    const user = useSelector((state) => state.authReducer.accessToken);
    console.log(user)
    return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedUser;
