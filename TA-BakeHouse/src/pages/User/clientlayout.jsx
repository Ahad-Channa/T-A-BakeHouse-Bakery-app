// pages/User/Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Client_Navbar from "./client_navbar";

const Client_Layout = () => {
  //const location = useLocation();
  //const hideNavbar = location.pathname === "/" || location.pathname === "/register";

  return (
    <>
     
    <Client_Navbar/>
      <div className="bg-bguser " >
        
        <Outlet />
      </div>
    </>
  );
};

export default Client_Layout;
