import React from "react";
import "./Profile.css";

export default function Profile({ setActivePage }) {
  return (
    <div className="profile-overlay">
      <div className="profile-card">
        {/* Top logo */}
        <div className="profile-logo">
          <span>jr</span>
        </div>

        {/* Avatar */}
        <div className="profile-avatar-wrap">
          <img
            src="https://i.pravatar.cc/120?img=47"
            alt="Alex"
            className="profile-avatar-img"
          />
        </div>

        {/* Name & Course */}
        <h2 className="profile-name">Alex</h2>
        <p className="profile-course">
          HND in &nbsp;<span className="course-highlight">Computing</span>
        </p>

        {/* Bio */}
        <p className="profile-bio">
          A kiddo who uses <span className="bio-highlight">Bootstrap</span> and{" "}
          <span className="bio-highlight">Laravel</span> in web development.
          Currently playing around with design via Figma
        </p>

        {/* Email */}
        <div className="profile-email">joeylenerivera@gmail.com</div>

        {/* Social Icons */}
        <div className="profile-socials">
          <a href="#" className="social-btn" title="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9 9 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.03-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 00-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 01-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.54 4.54 0 01-2.04.08 4.53 4.53 0 004.22 3.14A9.07 9.07 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0023 3z" />
            </svg>
          </a>
          <a href="#" className="social-btn" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" className="social-btn" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.28-1.23 3.28-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="#" className="social-btn dev-btn" title="Dev.to">
            <span className="dev-text">DEV</span>
          </a>
        </div>

        {/* Yellow corners */}
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        {/* Back Button */}
        <button className="back-btn" onClick={() => setActivePage("Home")}>
          Back
        </button>
      </div>
    </div>
  );
}
