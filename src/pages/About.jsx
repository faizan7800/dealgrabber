import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Welcome to Deal Grabber</h1>
        <h2>Your Ultimate Digital Passport for Amazing Deals and Discounts!</h2>
        <p>
          Deal Grabber unites restaurant, retail, and service businesses with
          cost-conscious consumers like you who are eager to discover unbeatable
          deals and discounts at hundreds of local destinations.
        </p>
        <p>
          As a proud channel partner of the{" "}
          <span className="highlight">ShopChiBiz Directory</span> and{" "}
          <span className="highlight">Urban Eats Restaurant Directory</span>, we
          empower you to save big while supporting your favorite local
          establishments.
        </p>
        <p>
          Whether you're a business looking to attract more customers or a savvy
          shopper hunting for exclusive bargains, Deal Grabber delivers
          incredible <strong>AI-enabled offers</strong> right at your
          fingertips.
        </p>
      </div>
    </div>
  );
};

export default About;
