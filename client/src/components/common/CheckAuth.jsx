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
    // if user is on shoping or other pages without login then redirect it to the login page 
    return <Navigate to='/auth/login' />
  }

  if(isAuthenticated && (location.pathname.includes("/login") ||
  location.pathname.includes("/register"))){
        if(user?.role === 'admin'){
            return <Navigate to="/admin/dashboard" />
        } else {
            return <Navigate to="/shop/home" />
        }
  }

  if(isAuthenticated && user?.role !=='admin' && location.pathname.includes('admin')) {
    return <Navigate to="/unauth-page" />
  } 

  if(isAuthenticated && user?.role ==='admin' && location.pathname.includes('shop')) {
    return <Navigate to="/admin/dashboard" />
  }

  return (
    <>
        {children}
    
    </>
  )

};

export default CheckAuth;
