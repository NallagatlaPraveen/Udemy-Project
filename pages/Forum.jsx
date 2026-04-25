import React from "react";
import "./Forum.css";

const lectures = [
  {
    name: "Mr. Niruban",
    time1: "Today,",
    time2: "9.52pm",
    avatar: "https://i.pravatar.cc/36?img=1",
  },
  {
    name: "Mr. Sam",
    time1: "Yesterday,",
    time2: "12.31pm",
    avatar: "https://i.pravatar.cc/36?img=2",
  },
  {
    name: "Mr. Nirmal",
    time1: "Wednesday,",
    time2: "9.12am",
    avatar: "https://i.pravatar.cc/36?img=3",
  },
];

const students = [
  {
    name: "Anil",
    msg: "April fool's day",
    time1: "Today,",
    time2: "9.52pm",
    avatar: "https://i.pravatar.cc/36?img=4",
    badge: "heart",
  },
  {
    name: "Chuduthiya",
    msg: "",
    time1: "Today,",
    time2: "12.11pm",
    avatar: "https://i.pravatar.cc/36?img=5",
    badge: "1",
  },
  {
    name: "Mary",
    msg: "You have to report it...",
    time1: "Today,",
    time2: "2.40pm",
    avatar: "https://i.pravatar.cc/36?img=6",
    badge: "1",
  },
  {
    name: "Bill Gates",
    msg: "Nevermind bro",
    time1: "Yesterday,",
    time2: "12.31pm",
    avatar: "https://i.pravatar.cc/36?img=7",
    badge: "5",
  },
  {
    name: "Victoria H",
    msg: "Okay, brother. let's see...",
    time1: "Wednesday,",
    time2: "11.12am",
    avatar: "https://i.pravatar.cc/36?img=8",
    badge: "",
  },
];

const messages = [
  { side: "left", text: "Hey There!", time: "" },
  { side: "left", text: "How are you?", time: "Today, 8.30pm" },
  { side: "right", text: "Hello!", time: "Today, 8.33pm" },
  { side: "right", text: "I am fine and how are you", time: "Today, 8.34pm" },
  { side: "left", text: "I am doing well, Can we meet", time: "Today, 8.36pm" },
  { side: "right", text: "Yes Sure!", time: "Today, 8.58pm" },
];

export default function Forum() {
  return (
    <div className="forum-main">
      <div className="forum-layout">
        {/* ── Left Panel ── */}
        <section className="forum-left-panel">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search" />
          </div>

          <div className="forum-lists">
            {/* Lectures */}
            <div className="list-card">
              <h3>Lectures</h3>
              {lectures.map((item, i) => (
                <div className="list-row" key={i}>
                  <div className="row-user">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="row-avatar"
                    />
                    <div className="row-info">
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                  <div className="row-time">
                    <span>{item.time1}</span>
                    <span>{item.time2}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Students */}
            <div className="list-card">
              <h3>Students</h3>
              {students.map((item, i) => (
                <div className="list-row" key={i}>
                  <div className="row-user">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="row-avatar"
                    />
                    <div className="row-info">
                      <h4>{item.name}</h4>
                      {item.msg && <p>{item.msg}</p>}
                    </div>
                  </div>
                  <div className="row-right">
                    <div className="row-time">
                      <span>{item.time1}</span>
                      <span>{item.time2}</span>
                    </div>
                    {item.badge === "heart" && (
                      <div className="msg-badge badge-heart">💜</div>
                    )}
                    {item.badge && item.badge !== "heart" && (
                      <div className="msg-badge badge-count">{item.badge}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Chat Panel ── */}
        <section className="chat-panel">
          <div className="chat-header">
            <div className="chat-user">
              <img
                src="https://i.pravatar.cc/36?img=4"
                alt="Anil"
                className="chat-avatar"
              />
              <div className="chat-user-info">
                <h3>Anil</h3>
                <p>Online · Last seen, 2.02pm</p>
              </div>
            </div>
            <div className="chat-actions">
              <span>📞</span>
              <span>📹</span>
              <span>⋮</span>
            </div>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div className={`message-row ${msg.side}`} key={i}>
                <div className="message-group">
                  <div
                    className={`message-bubble ${msg.side === "right" ? "purple" : "gray"}`}
                  >
                    {msg.text}
                  </div>
                  {msg.time && <small className="time-label">{msg.time}</small>}
                </div>
                <div
                  className={`message-dot ${msg.side === "right" ? "purple-dot" : ""}`}
                >
                  •
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input-wrap">
            <div className="chat-input-bar">
              <span className="attach-icon">📎</span>
              <input type="text" placeholder="Type your message here..." />
              <div className="input-icons">
                <span>😊</span>
                <span>📷</span>
              </div>
              <button className="mic-btn">🎤</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
