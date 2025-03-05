import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreenn.css";
import { auth } from "../utils/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';
import dealopolyImage from "../assets/images/young-man.jpg"; // Placeholder Image
import { Link } from "react-router-dom";

const DealopolySplash = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors
    const loadingSignup = toast.loading("Creating your account");
    // Validation
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully! You can login now", {id: loadingSignup});
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login")
    } catch (err) {
      setError(err.message);
      toast.error("Signup failed! " + err.message, {id: loadingSignup});
    }
  };

  const [countdown, setCountdown] = useState(5)
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      let splashScreen = document.querySelector(".splash-screen_dealopoly");
      if (splashScreen) {
        splashScreen.style.display = "none";
      }
      clearInterval(timer); // Stop countdown when splash disappears
    }, 5000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (

    <>
    <div className="splash-screen_dealopoly">
      <img src={dealopolyImage} alt="Dealopoly" className="splash-image_dealopoly" />
     
      <p className="splash-text_dealopoly">
        "Discover Dealopoly, where every deal becomes an exciting adventure for
        exclusive rewards. Engage in exciting challenges and unlock unbeatable
        discounts at your favorite local spots."
       
      </p>
      <small style={{zIndex: "10001", paddingBottom: "10px", color: "#044f70"}}>This splash screen will only show for {countdown} seconds</small>
      <button className="button_dealopoly"><Link to={"/"}>Home</Link></button>

    </div>

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
      </div>
    </div>
    </>
  );
};

export default DealopolySplash;
