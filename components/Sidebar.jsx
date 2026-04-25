import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../assets/oxford-logo.jpeg";

export default function Sidebar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "📬", label: "My Courses" },
    { icon: "📄", label: "Assignments" },
    { icon: "📋", label: "Time Table" },
    { icon: "💬", label: "Forum" },
    { icon: "⚙️", label: "Settings" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "expanded" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Oxford" className="sidebar-logo" />
        {isOpen && <span className="logo-text">OXFORD</span>}

        <span
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          title="Toggle Menu"
        >
          ☰
        </span>
      </div>

      <div
        className="profile-section"
        onClick={() => setActivePage("Profile")}
        style={{ cursor: "pointer" }}
      >
        <div className="profile-avatar">
          <img src="https://i.pravatar.cc/60?img=12" alt="Alex" />
        </div>

        {isOpen && (
          <div className="profile-info">
            <p className="profile-name">Hi, Alex</p>
            <p className="profile-id">E173037</p>
          </div>
        )}
      </div>

      <nav className="menu-list">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`menu-btn ${activePage === item.label ? "active" : ""}`}
            onClick={() => setActivePage(item.label)}
            title={item.label}
          >
            <span className="menu-icon">{item.icon}</span>
            {isOpen && <span className="menu-label">{item.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
}
