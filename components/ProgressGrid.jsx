import React from "react";
import "./ProgressGrid.css";

const stats = [
  { label: "Module Progress :", value: "90%", side: "left" },
  { label: "Assignment Progress :", value: "10%", side: "right" },
  { label: "Attendance Progress :", value: "97%", side: "left" },
  { label: "Course Progress", value: "50%", side: "right" },
];

export default function ProgressGrid() {
  return (
    <div className="progress-grid">
      {stats.map((s, i) => (
        <div className="progress-item" key={i}>
          <span className="progress-label">{s.label}</span>
          <span className="progress-value">{s.value}</span>
        </div>
      ))}
    </div>
  );
}
