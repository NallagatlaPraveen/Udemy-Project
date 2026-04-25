import React from "react";
import "./Dashboard.css";
import ScholarshipBanner from "../components/ScholarshipBanner";
import CourseCards from "../components/CourseCards";
import ProgressGrid from "../components/ProgressGrid";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <ScholarshipBanner />
      <CourseCards />
      <ProgressGrid />
    </div>
  );
}
