
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (!user) return <Navigate to="/" />; // ⬅ redirect to login

  if (requiredRole && user.role !== requiredRole) {
    // If role mismatch, redirect to correct dashboard
    return <Navigate to={user.role === "admin" ? "/admin" : "/home"} />;
  }

  return children;
};

export default PrivateRoute;

// // 