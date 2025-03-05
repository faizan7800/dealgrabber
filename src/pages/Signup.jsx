import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sign.css"; // Ensure this path is correct
import { FcGoogle } from "react-icons/fc"; // Google icon

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    console.log("Signup with:", email, password);
    navigate("/dashboard"); // Redirect to dashboard (dummy)
  };

  const handleGoogleSignup = () => {
    console.log("Signup with Google");
    // Add Google signup logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create an Account</h2>
        <p className="auth-subtitle">Join us to get started</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="auth-input"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="auth-input"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="auth-input"
            />
          </div>
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <div className="auth-options">
          <p className="auth-switch">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
        <div className="auth-social-login">
          <p>Or sign up with:</p>
          <button className="social-button google" onClick={handleGoogleSignup}>
            <FcGoogle /> oogle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;