import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreenn.css";
import dealPagesImage from "../assets/images/young-man.jpg"; // Placeholder Image

const DealPagesSplash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/deal-pages");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={dealPagesImage} alt="Deal Pages" className="splash-image" />
      <p className="splash-text">
        "Discover Deal Pages, your digital gateway to a universe of exclusive
        offers and irresistible discounts. Browse, compare, and unlock
        hand-picked deals from top local businesses—all in one dynamic
        directory."
      </p>
    </div>
  );
};

export default DealPagesSplash;
