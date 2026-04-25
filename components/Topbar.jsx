import React from "react";
import "./Topbar.css";
import { useNotification } from "../context/NotificationContext";

export default function Topbar({ activePage }) {
  const { toggleNotification, isOpen } = useNotification();

  return (
    <div className="topbar">
      <div className="topbar-left">
        {activePage === "My Courses" ? (
          <h2 className="topbar-title">My Courses</h2>
        ) : activePage === "Assignments" ? (
          <h2 className="topbar-title">Assignment</h2>
        ) : activePage === "Time Table" ? (
          <h2 className="topbar-title">Time Table</h2>
        ) : activePage === "Forum" ? (
          <h2 className="topbar-title">Forum</h2>
        ) : activePage === "Settings" ? (
          <h2 className="topbar-title">Settings</h2>
        ) : (
          <>
            <h2 className="topbar-title">Dashboard</h2>
            <p className="topbar-subtitle">
              Welcome Back, &nbsp;<strong>Alex</strong>
            </p>
          </>
        )}
      </div>

      <div className="topbar-right">
        <button
          className={`icon-btn bell-btn ${isOpen ? "bell-active" : ""}`}
          title="Notifications"
          onClick={toggleNotification}
        >
          🔔
          <span className="bell-dot" />
        </button>

        <button className="icon-btn" title="Messages">
          💬
        </button>
      </div>
    </div>
  );
}
