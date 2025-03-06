import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreenn.css";
import { Link } from "react-router-dom";
import partnersImage from "../assets/images/young-man.jpg"; // Placeholder Image


const PartnersSplash = () => {
  const navigate = useNavigate();
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
      <img src={partnersImage} alt="Dealopoly" className="splash-image_dealopoly" />
     
      <p className="splash-text_dealopoly">
        "Discover Dealopoly, where every deal becomes an exciting adventure for
        exclusive rewards. Engage in exciting challenges and unlock unbeatable
        discounts at your favorite local spots."
       
      </p>
      <small style={{zIndex: "10001", paddingBottom: "10px", color: "#044f70"}}>This splash screen will only show for {countdown} seconds</small>
      <button className="button_dealopoly"><Link to={"/"}>Home</Link></button>

    </div>

      <div id="nav-buttons-partners">
          <button onClick={() => navigate("/foodopoly")}>Foodopoly</button>
          <button onClick={() => navigate("/mobilopoly")}>Mobilopoly </button>
          {/* <button onClick={() => handleNavigation("/about")}>About Us</button> */}
        </div>

    </>
  );
};


export default PartnersSplash;
