import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sign.css"; // Ensure this path is correct
import { FcGoogle } from "react-icons/fc"; // Google icon

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    console.log("Login with:", email, password);
    navigate("/dashboard"); // Redirect to dashboard (dummy)
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
    // Add Google login logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back!</h2>
        <p className="auth-subtitle">Login to your account</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <div className="auth-options">
          <p className="auth-switch">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
          <p className="auth-forgot-password" onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </p>
        </div>
        <div className="auth-social-login">
          <p>Or continue with:</p>
          <button className="social-button google" onClick={handleGoogleLogin}>
            <FcGoogle /> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;