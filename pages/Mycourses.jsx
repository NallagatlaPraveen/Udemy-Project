import React, { useState } from "react";
import "./MyCourses.css";

const courses = [
  { title: "Diploma in English", code: "OXF/ENG/01" },
  { title: "Diploma in IT", code: "OXF/DIT/01" },
  { title: "HND in Computing", code: "OXF/HND/01" },
];

const semesterData = {
  "Semester 01": [
    {
      module: "Module 01",
      subject: "Programming",
      unit: "Unit 01",
      status: "Completed",
    },
    {
      module: "Module 02",
      subject: "Networking",
      unit: "Unit 01",
      status: "Ongoing",
    },
    {
      module: "Module 03",
      subject: "Database",
      unit: "Unit 01",
      status: "Pending",
    },
    {
      module: "Module 04",
      subject: "Professional Practice",
      unit: "Unit 01",
      status: "Pending",
    },
  ],
  "Semester 02": [
    {
      module: "Module 01",
      subject: "Web Development",
      unit: "Unit 02",
      status: "Pending",
    },
    {
      module: "Module 02",
      subject: "UI/UX Design",
      unit: "Unit 02",
      status: "Pending",
    },
    {
      module: "Module 03",
      subject: "Cloud Computing",
      unit: "Unit 02",
      status: "Pending",
    },
    {
      module: "Module 04",
      subject: "Cyber Security",
      unit: "Unit 02",
      status: "Pending",
    },
  ],
  "Semester 03": [
    {
      module: "Module 01",
      subject: "Machine Learning",
      unit: "Unit 03",
      status: "Pending",
    },
    {
      module: "Module 02",
      subject: "Data Science",
      unit: "Unit 03",
      status: "Pending",
    },
    {
      module: "Module 03",
      subject: "Mobile Apps",
      unit: "Unit 03",
      status: "Pending",
    },
    {
      module: "Module 04",
      subject: "DevOps",
      unit: "Unit 03",
      status: "Pending",
    },
  ],
  "Semester 04": [
    {
      module: "Module 01",
      subject: "Final Project",
      unit: "Unit 04",
      status: "Pending",
    },
    {
      module: "Module 02",
      subject: "Research Methods",
      unit: "Unit 04",
      status: "Pending",
    },
    {
      module: "Module 03",
      subject: "Dissertation",
      unit: "Unit 04",
      status: "Pending",
    },
    {
      module: "Module 04",
      subject: "Viva",
      unit: "Unit 04",
      status: "Pending",
    },
  ],
};

const semesters = Object.keys(semesterData);
const ITEMS_PER_PAGE = 4;

export default function MyCourses() {
  const [activeSemester, setActiveSemester] = useState("Semester 01");
  const [currentPage, setCurrentPage] = useState(0);

  const rows = semesterData[activeSemester];
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
    if (status === "Completed") return "status completed";
    if (status === "Ongoing") return "status ongoing";
    return "status pending";
  };

  return (
    <div className="mycourses">
      {/* Course Cards */}
      <div className="course-cards-row">
        {courses.map((c, i) => (
          <div className="course-card" key={i}>
            <div className="course-icon">📄</div>
            <div className="course-info">
              <p className="course-title">{c.title}</p>
              <p className="course-code">{c.code}</p>
            </div>
          </div>
        ))}
      </div>

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

      {/* Module Table */}
      <div className="module-table">
        <table>
          <tbody>
            {shown.map((row, i) => (
              <tr key={i}>
                <td className="check-cell">
                  <span className="checkbox">✔</span>
                </td>
                <td className="module-cell">{row.module}</td>
                <td className="subject-cell">{row.subject}</td>
                <td className="unit-cell">{row.unit}</td>
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
