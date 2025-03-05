import React from "react";
import "../styles/Deals.css";
import blackCouple from "../assets/images/black-couple.jpg"; 
import cheerful from "../assets/images/cheerful-couple.jpg";
import youngMan from "../assets/images/young-man.jpg";

const Deals = () => {
  const deals = [
    {
      id: 1,
      image: blackCouple,
      title: "50% Off Pizza",
      description: "Get half off on your favorite pizza!",
    },
    {
      id: 2,
      image: cheerful,
      title: "Free Coffee",
      description: "Buy one, get one free on all coffees.",
    },
    {
      id: 3,
      image: youngMan ,
      title: "Happy Hour",
      description: "Enjoy discounted drinks from 5-7 PM.",
    },
    {
      id: 4,
      image: blackCouple,
      title: "Burger Combo",
      description: "Get a burger, fries, and drink for just $10.",
    },
    {
      id: 5,
      image: cheerful,
      title: "Dessert Special",
      description: "20% off all desserts this weekend.",
    },
    {
      id: 6,
      image: youngMan,
      title: "Taco Tuesday",
      description: "Tacos starting at $2 every Tuesday.",
    },
    {
      id: 3,
      image: blackCouple ,
      title: "Happy Hour",
      description: "Enjoy discounted drinks from 5-7 PM.",
    },
    {
      id: 3,
      image: cheerful ,
      title: "Happy Hour",
      description: "Enjoy discounted drinks from 5-7 PM.",
    }
  ];

  return (
    <div className="deals">
      <h1>Deals</h1>
      <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <img src={deal.image} alt={deal.title} />
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
            <button className="add-to-wallet">Add to Wallet</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;