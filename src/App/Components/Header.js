import React from 'react';
import logo from "../Images/logo.png";

function Header() {
  return (
    <header id="header" className="header site-bg  d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <span
         
          style={{ textDecoration: "none", fontSize:'xx-large' }}
          className="logo d-flex align-items-center"
        >
          <img style={{ width: "50px", borderRadius:'20px' }} src={logo} alt="" />
          <span className="d-none d-lg-block">Roi Study</span>
        </span>
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>
    </header>
  );
}

export default Header