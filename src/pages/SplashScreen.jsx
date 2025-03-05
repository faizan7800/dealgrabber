import React from "react";
import "../styles/SplashScreen.css";
import logo from "../assets/images/dealgrabber1bg.png";
import image1 from "../assets/images/black-couple.jpg"; // Add actual image paths
import image2 from "../assets/images/cheerful-couple.jpg"; // Add actual image paths
import image3 from "../assets/images/young-man.jpg"; // Add actual image paths

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="splash-images">
        <img src={image1} alt="Deal 1" className="splash-image fade-in" />
        <img src={image2} alt="Deal 2" className="splash-image fade-in" />
        <img src={image3} alt="Deal 3" className="splash-image fade-in" />
      </div>
      <div className="splash-content">
        <img src={logo} alt="Deal Grabber Logo" className="splash-logo" />
        <p className="splash-text">Find the best deals in town!</p>
      </div>
    </div>
  );
};

export default SplashScreen;
