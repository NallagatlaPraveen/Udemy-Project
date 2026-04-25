import React from "react";
import "./Settings.css";

const settingsOptions = [
  { icon: "🔔", label: "Notifications"               },
  { icon: "🔑", label: "Change Password"             },
  { icon: "🛡️", label: "Security"                    },
  { icon: "👥", label: "Friends"                     },
  { icon: "💬", label: "Enable Two Step Verification" },
  { icon: "🌐", label: "Display and languages"       },
  { icon: "❓", label: "Help"                         },
];

export default function Settings() {
  return (
    <div className="settings-main">
      <div className="settings-card">
        {settingsOptions.map((item) => (
          <div className="settings-row" key={item.label}>
            <div className="settings-left">
              <span className="settings-row-icon">{item.icon}</span>
              <span className="settings-row-label">{item.label}</span>
            </div>
            <span className="arrow">›</span>
          </div>
        ))}
      </div>

      <div className="logout-box">
        <span className="logout-icon">⎋</span>
        <span>logout</span>
      </div>
    </div>
  );
}