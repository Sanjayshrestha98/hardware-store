import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  
  const userDetails = JSON.parse(localStorage?.getItem("_hw_userDetails"));

  const userRole = userDetails?.role;

  if (userRole && (userRole.includes("super-admin") || userRole.includes("admin"))) {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
