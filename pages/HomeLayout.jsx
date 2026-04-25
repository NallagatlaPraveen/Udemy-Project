import React, { useState } from "react";
import "../App.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";
import Assignments from "./Assignments";
import TimeTable from "./TimeTable";
import Profile from "./Profile";
import Forum from "./Forum";
import Settings from "./Settings";

import { NotificationProvider } from "../context/NotificationContext";
import NotificationPanel from "../components/Notification/NotificationPanel";

export default function HomeLayout() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Dashboard />;
      case "My Courses":
        return <MyCourses />;
      case "Assignments":
        return <Assignments />;
      case "Time Table":
        return <TimeTable />;
      case "Forum":
        return <Forum />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <NotificationProvider>
      <div className="app-layout">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        <div className="main-content">
          <Topbar activePage={activePage} />
          {renderPage()}
        </div>

        {activePage === "Profile" && <Profile setActivePage={setActivePage} />}

        <NotificationPanel />
      </div>
    </NotificationProvider>
  );
}
