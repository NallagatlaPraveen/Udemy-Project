import React, { useState } from "react";
import "./Assignments.css";

const assignmentData = {
  "Semester 01": [
    {
      unit: "03",
      subject: "CRP",
      issued: "03/02/2023",
      deadline: "03/05/2023",
      status: "Submitted",
      checked: true,
    },
    {
      unit: "01",
      subject: "Programming",
      issued: "03/09/2023",
      deadline: "03/09/2025",
      status: "Pending",
      checked: false,
    },
    {
      unit: "01",
      subject: "Database",
      issued: "03/02/2024",
      deadline: "03/10/2026",
      status: "Pending",
      checked: false,
    },
    {
      unit: "01",
      subject: "Networking",
      issued: "02/05/2022",
      deadline: "03/11/2023",
      status: "Pending",
      checked: false,
    },
    {
      unit: "02",
      subject: "Security",
      issued: "02/08/2022",
      deadline: "03/10/2023",
      status: "Late Submission",
      checked: true,
    },
  ],
  "Semester 02": [
    {
      unit: "01",
      subject: "Web Dev",
      issued: "01/03/2023",
      deadline: "01/06/2023",
      status: "Pending",
      checked: false,
    },
    {
      unit: "02",
      subject: "UI/UX",
      issued: "01/04/2023",
      deadline: "01/07/2023",
      status: "Submitted",
      checked: true,
    },
    {
      unit: "01",
      subject: "Cloud",
      issued: "01/05/2023",
      deadline: "01/08/2023",
      status: "Pending",
      checked: false,
    },
    {
      unit: "03",
      subject: "Cyber Sec",
      issued: "01/06/2023",
      deadline: "01/09/2023",
      status: "Pending",
      checked: false,
    },
    {
      unit: "02",
      subject: "DevOps",
      issued: "01/07/2023",
      deadline: "01/10/2023",
      status: "Late Submission",
      checked: true,
    },
  ],
  "Semester 03": [
    {
      unit: "01",
      subject: "ML",
      issued: "02/01/2024",
      deadline: "02/04/2024",
      status: "Pending",
      checked: false,
    },
    {
      unit: "02",
      subject: "Data Sci",
      issued: "02/02/2024",
      deadline: "02/05/2024",
      status: "Pending",
      checked: false,
    },
    {
      unit: "01",
      subject: "Mobile",
      issued: "02/03/2024",
      deadline: "02/06/2024",
      status: "Submitted",
      checked: true,
    },
    {
      unit: "03",
      subject: "AI",
      issued: "02/04/2024",
      deadline: "02/07/2024",
      status: "Pending",
      checked: false,
    },
    {
      unit: "02",
      subject: "Big Data",
      issued: "02/05/2024",
      deadline: "02/08/2024",
      status: "Pending",
      checked: false,
    },
  ],
  "Semester 04": [
    {
      unit: "01",
      subject: "Project",
      issued: "03/01/2025",
      deadline: "03/04/2025",
      status: "Pending",
      checked: false,
    },
    {
      unit: "02",
      subject: "Research",
      issued: "03/02/2025",
      deadline: "03/05/2025",
      status: "Pending",
      checked: false,
    },
    {
      unit: "03",
      subject: "Dissertation",
      issued: "03/03/2025",
      deadline: "03/06/2025",
      status: "Pending",
      checked: false,
    },
    {
      unit: "01",
      subject: "Viva",
      issued: "03/04/2025",
      deadline: "03/07/2025",
      status: "Submitted",
      checked: true,
    },
    {
      unit: "02",
      subject: "Portfolio",
      issued: "03/05/2025",
      deadline: "03/08/2025",
      status: "Pending",
      checked: false,
    },
  ],
};

const semesters = Object.keys(assignmentData);
const ITEMS_PER_PAGE = 5;

export default function Assignments() {
  const [activeSemester, setActiveSemester] = useState("Semester 01");
  const [currentPage, setCurrentPage] = useState(0);

  const rows = assignmentData[activeSemester];
  const total = Math.ceil(rows.length / ITEMS_PER_PAGE);
  const shown = rows.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );

  const handleSemester = (sem) => {
    setActiveSemester(sem);
    setCurrentPage(0);
  };

  const statusClass = (status) => {
    if (status === "Submitted") return "status submitted";
    if (status === "Late Submission") return "status late";
    return "status pending";
  };

  return (
    <div className="assignments">
      {/* Semester Tabs */}
      <div className="semester-tabs">
        {semesters.map((sem) => (
          <button
            key={sem}
            className={`sem-tab ${activeSemester === sem ? "active" : ""}`}
            onClick={() => handleSemester(sem)}
          >
            {sem}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="assign-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Unit</th>
              <th>Subject</th>
              <th>Issues Date</th>
              <th>Deadline</th>
              <th>Status</th>
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
                <td className="unit-cell">{row.unit}</td>
                <td className="subject-cell">{row.subject}</td>
                <td className="date-cell">{row.issued}</td>
                <td className="date-cell">{row.deadline}</td>
                <td className="status-cell">
                  <span className={statusClass(row.status)}>{row.status}</span>
                </td>
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
