import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSliders,
  faCommentDots,
  faBell,
  faCog,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div className="left-section">
        <h1>Dashboard</h1>
        <p>Let's check your store today</p>
      </div>
      <div className="middle-section">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" />
          <button className="filter-button">
            <FontAwesomeIcon icon={faSliders} />
          </button>
        </div>
      </div>
      <div className="right-section">
        <button className="language-button">🇺🇸</button>
        <button className="chat-button">
          <FontAwesomeIcon icon={faCommentDots} />
        </button>
        <button className="notification-button">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className="settings-button">
          <FontAwesomeIcon icon={faCog} />
        </button>
        <button className="profile-button">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
