import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreenn.css";
import partnersImage from "../assets/images/young-man.jpg"; // Placeholder Image

const PartnersSplash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/partners");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={partnersImage} alt="Partners" className="splash-image" />
      <p className="splash-text">
        "Experience Mobilopoly, where each swipe opens a dynamic world of
        exclusive offers and surprise deals. Engage on the go, tackle fun
        challenges, and score amazing rewards right from your mobile device."
      </p>
    </div>
  );
};

export default PartnersSplash;
