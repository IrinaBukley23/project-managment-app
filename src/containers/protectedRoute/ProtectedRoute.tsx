import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
  const token = localStorage.getItem('token');
  const user = { loggedIn: token !== null };
  return user && user.loggedIn;
};
const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={'/'} />;
};

export default ProtectedRoute;
