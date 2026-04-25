import React from "react";
import "./ScholarshipBanner.css";

export default function ScholarshipBanner() {
  return (
    <div className="banner-card">
      <div className="banner-logos">
        <div className="bio-badge">
          <span className="bio-small">Department of</span>
          <span className="bio-big">BIOLOGY</span>
        </div>
        <div className="oxford-badge">
          <span className="ox-small">UNIVERSITY OF</span>
          <span className="ox-big">OXFORD</span>
        </div>
      </div>

      <div className="banner-flag">🇬🇧</div>

      <h2 className="banner-title">
        Oxford scholarships for PhD (Dphil) in Biology,
        <br />
        2023-24, University of Oxford, UK
      </h2>
    </div>
  );
}
