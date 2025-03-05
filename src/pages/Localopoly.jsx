import "../styles/Localopoly.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SplashScreenn.css";
import image1 from "../assets/images/black-couple.jpg";

const Localopoly = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5)
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
       window.location.href = "https://heyzine.com/flip-book/8ad5f1bf4e.html"
    }, 3000);

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
      <img src={image1} alt="Dealopoly" className="splash-image_dealopoly" />
     
      <p className="splash-text_dealopoly">
        "Discover Deal Pages, your digital gateway to a universe of exclusive offers and irresistible discounts. Browse, compare, and unlock hand-picked deals from top local businesses—all in one dynamic directory."
       
      </p>
      <small style={{zIndex: "10001", paddingBottom: "10px", color: "#044f70"}}>This page will redirect you to deal page in {countdown} seconds</small>
      <button className="button_dealopoly"><Link to={"/"}>Home</Link></button>

    </div>

    </>
  );
};

export default Localopoly;