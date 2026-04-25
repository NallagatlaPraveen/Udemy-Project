import React, { useEffect, useRef } from "react";
import "./NotificationPanel.css";
import { useNotification } from "../../context/NotificationContext";

const notifications = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/40?img=11",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "1m ago.",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/40?img=22",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "1m ago.",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/40?img=33",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "1m ago.",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/40?img=44",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "1m ago.",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/40?img=55",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "1m ago.",
  },
];

const NotificationPanel = () => {
  const { isOpen, closeNotification } = useNotification();
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        // Don't close if clicking the bell button itself
        if (!e.target.closest(".bell-btn")) {
          closeNotification();
        }
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeNotification]);

  return (
    <div className={`notif-panel ${isOpen ? "open" : ""}`} ref={panelRef}>
      <div className="notif-header">
        <span>Notification</span>
      </div>
      <div className="notif-list">
        {notifications.map((n) => (
          <div className="notif-item" key={n.id}>
            <img src={n.avatar} alt="avatar" className="notif-avatar" />
            <div className="notif-content">
              <p>{n.text}</p>
              <span className="notif-time">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
