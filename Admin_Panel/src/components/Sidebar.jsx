import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="https://freelogopng.com/images/all_img/1655830761shopify-logo-png.png"
          alt="Shopify logo"
        />
        <span id="logo-text">- Admin</span>
      </div>
      <nav>
        <ul>
          <li className="active">
            <span className="icon">
              <i className="fas fa-th-large"></i>
            </span>
            <p>Dashboard</p>
          </li>
          <li>
            <span className="icon">
              <i className="fas fa-user"></i>
            </span>
            <p>Products</p>
          </li>
          <li>
            <span className="icon">
              <i className="fas fa-shopping-cart"></i>
            </span>
            <p>Orders</p>
          </li>
          <li>
            <span className="icon">
              <i className="fas fa-file-alt"></i>
            </span>
            <p>Reports</p>
          </li>
          <li>
            <span className="icon">
              <i className="fas fa-users"></i>
            </span>
            <p>Customers</p>
          </li>
          <li>
            <span className="icon">
              <i className="fas fa-cog"></i>
            </span>
            <p>Settings</p>
          </li>
        </ul>
      </nav>
      <div className="logout">
        <p>Logout</p>
        <p className="subtitle">log out your account</p>
        <button>LOGOUT</button>
      </div>
    </div>
  );
}

export default Sidebar;
