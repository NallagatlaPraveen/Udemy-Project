import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Reset link sent to ${email}!`);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your registered email"
            />
          </div>

          <button type="submit" className="auth-button">
            Send Reset Link
          </button>

          {message && <div className="success-message">{message}</div>}
        </form>

        <p className="auth-footer">
          Remember password? <Link to="/">Back to Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
