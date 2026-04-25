import React, { useState } from "react";
import "./TimeTable.css";

const liveClasses = [
  { name: "John",   email: "john@gmail.com",   flag: "🇮🇳", subject: "English",     start: "9.00", end: "1.00", date: "20.10.2023", checked: true  },
  { name: "Doe",    email: "doe@gmail.com",    flag: "🇮🇳", subject: "Programming", start: "9.00", end: "1.00", date: "21.10.2023", checked: false },
  { name: "Sam",    email: "sam@gmail.com",    flag: "🇮🇳", subject: "Database",    start: "9.00", end: "1.00", date: "22.10.2023", checked: false },
  { name: "Kumar",  email: "kumar@gmail.com",  flag: "🇮🇳", subject: "Networking",  start: "9.00", end: "1.00", date: "23.10.2023", checked: false },
  { name: "Sanjay", email: "sanjay@gmail.com", flag: "🇮🇳", subject: "Security",    start: "9.00", end: "1.00", date: "24.10.2023", checked: false },
];

const recordedClasses = [
  { name: "Alice",  email: "alice@gmail.com",  flag: "🇮🇳", subject: "English",     start: "10.00", end: "12.00", date: "15.10.2023", checked: true  },
  { name: "Bob",    email: "bob@gmail.com",    flag: "🇮🇳", subject: "Programming", start: "10.00", end: "12.00", date: "16.10.2023", checked: false },
  { name: "Carol",  email: "carol@gmail.com",  flag: "🇮🇳", subject: "Database",    start: "10.00", end: "12.00", date: "17.10.2023", checked: false },
  { name: "David",  email: "david@gmail.com",  flag: "🇮🇳", subject: "Networking",  start: "10.00", end: "12.00", date: "18.10.2023", checked: false },
  { name: "Eva",    email: "eva@gmail.com",    flag: "🇮🇳", subject: "Security",    start: "10.00", end: "12.00", date: "19.10.2023", checked: false },
];

const ITEMS_PER_PAGE = 5;

export default function TimeTable() {
  const [activeTab, setActiveTab]   = useState("Live Class");
  const [currentPage, setCurrentPage] = useState(0);

  const data  = activeTab === "Live Class" ? liveClasses : recordedClasses;
  const total = Math.ceil(data.length / ITEMS_PER_PAGE);
  const shown = data.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const handleTab = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  return (
    <div className="timetable">

      {/* Top Tabs */}
      <div className="tt-tabs">
        <button
          className={`tt-tab ${activeTab === "Live Class" ? "active" : ""}`}
          onClick={() => handleTab("Live Class")}
        >
          Live Class
        </button>
        <div className="tt-tab-spacer" />
        <button
          className={`tt-tab ${activeTab === "Recorded Class" ? "active" : ""}`}
          onClick={() => handleTab("Recorded Class")}
        >
          Recorded Class
        </button>
      </div>

      {/* Table */}
      <div className="tt-table">
        <table>
          <thead>
            <tr>
              <th>
                <span className="checkbox checked">✔</span>
              </th>
              <th>Lecture Name</th>
              <th>Subject</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((row, i) => (
              <tr key={i}>
                <td className="check-cell">
                  {row.checked ? (
                    <span className="checkbox checked">✔</span>
                  ) : (
                    <span className="checkbox unchecked"></span>
                  )}
                </td>
                <td className="lecturer-cell">
                  <div className="lecturer-info">
                    <img
                      src={`https://i.pravatar.cc/36?img=${i + 10}`}
                      alt={row.name}
                      className="lecturer-avatar"
                    />
                    <div>
                      <p className="lecturer-name">
                        {row.name} {row.flag}
                      </p>
                      <p className="lecturer-email">{row.email}</p>
                    </div>
                  </div>
                </td>
                <td>{row.subject}</td>
                <td>{row.start}</td>
                <td>{row.end}</td>
                <td>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            className="page-btn"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, total - 1))}
            disabled={currentPage === total - 1}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
}