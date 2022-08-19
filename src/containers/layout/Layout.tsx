import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.css';
export const Layout = () => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};
