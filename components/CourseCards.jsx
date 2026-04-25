import React from "react";
import "./CourseCards.css";

const courses = [
  { title: "Diploma in English", code: "OXF/ENG/01" },
  { title: "Diploma in IT", code: "OXF/DIT/01" },
  { title: "HND in Computing", code: "OXF/HND/01" },
];

export default function CourseCards() {
  return (
    <div className="course-cards-row">
      {courses.map((course, i) => (
        <div className="course-card" key={i}>
          <div className="course-icon">📄</div>
          <div className="course-info">
            <p className="course-title">{course.title}</p>
            <p className="course-code">{course.code}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
