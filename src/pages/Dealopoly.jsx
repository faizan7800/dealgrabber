import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreenn.css";
import dealopolyImage from "../assets/images/young-man.jpg"; // Placeholder Image

const DealopolySplash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dealopoly");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={dealopolyImage} alt="Dealopoly" className="splash-image" />
      <p className="splash-text">
        "Discover Dealopoly, where every deal becomes an exciting adventure for
        exclusive rewards. Engage in exciting challenges and unlock unbeatable
        discounts at your favorite local spots."
      </p>
    </div>
  );
};

export default DealopolySplash;
