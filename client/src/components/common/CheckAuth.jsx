import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// children - the component we have to render
const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") || 
      location.pathname.includes("/register")
    )
  ) {
    // If user is on shopping or other pages without login then redirect it to the login page 
    return <Navigate to='/auth/login' />;
  }

  if (
    isAuthenticated && 
    (location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
    // Redirect based on user role after login
    if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
    // Non-admin user trying to access admin page
    return <Navigate to="/unauth-page" />;
  }

  if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
    // Admin user trying to access shop page
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <>
      {children}
    </>
  );
};

export default CheckAuth;
