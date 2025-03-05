import React from "react";
import { useParams } from "react-router-dom";

import QRCode from "qrcode.react";

import "../styles/DealPage.css";
import sampleDealImage from "../assets/images/deal-pages.png"; 

const DealPage = () => {
  const { dealId } = useParams(); 

  // Mock Data (Replace with API data)
  const deal = {
    title: "50% Off at XYZ Restaurant!",
    description: "Enjoy a delicious meal at XYZ Restaurant with an exclusive 50% discount. Limited time offer!",
    image: sampleDealImage,
    claimLink: `https://dealopoly.app/redeem/${dealId}`, // Dynamic voucher URL
  };

  return (
    <div className="deal-page">
      <div className="deal-banner">
        <img src={deal.image} alt={deal.title} />
      </div>
      <h1>{deal.title}</h1>
      <p>{deal.description}</p>

      {/* QR Code for Voucher Redemption */}
      <div className="qr-container">
        <QRCode value={deal.claimLink} size={150} />
        <p>Scan the QR code to redeem your deal</p>
      </div>

      <a href={deal.claimLink} className="claim-button" target="_blank" rel="noopener noreferrer">
        Claim Offer
      </a>
    </div>
  );
};

export default DealPage;
