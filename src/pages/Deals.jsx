import React, { useState, useEffect } from "react";
import "../styles/Deals.css";
import { db } from "../utils/firebaseConfig"; // Ensure correct Firestore import
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Deals = () => {
  const navigate = useNavigate();
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {

    const fetchDeals = async () => {

      try {
        setLoading(true)
        const dealsCollection = collection(db, "deals"); 
        const dealsSnapshot = await getDocs(dealsCollection);
        const dealsList = dealsSnapshot.docs.map((doc) => ({
          id: doc.id, 
          ...doc.data(), 
        }));
        
        setDeals(dealsList);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    };

    fetchDeals();
  }, []);

  if(loading){
    return (
      <h1 style={{textAlign:"center"}}>Fetching deals...</h1>
    )
  }

  return (
    <div className="deals">
      <h1>Deals</h1>
      <div className="deals-grid">
      {deals.map((deal) => (
        <div key={deal.id} className="deal-card" style={{cursor:"pointer"}} onClick={() => navigate(`/deals/${deal.id}`)}>
          <img src={deal.image} alt={deal.name} />
          <h3>{deal.name}</h3>
          <p>{deal.description}</p>
          <button className="add-to-wallet" onClick={() => navigate(`/deals/${deal.id}`)}>Check Deal</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Deals;