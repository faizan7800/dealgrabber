import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import {db} from '../utils/firebaseConfig'
import {collection, addDoc} from 'firebase/firestore'
import spinPlaceholder from "../assets/images/1994_spincircle.png";
import { auth } from "../utils/firebaseConfig";
// import Toaster from 'react-hot-toast';
import toast from "react-hot-toast";
import SpinWheel from "../components/SpinWheel";

const Home = () => {

  const prizes = ['No Prize', 'Your Prize 1', 'Your Prize 2', 'Your Prize 3', 'Your Prize 4', 'Your Prize 5'];
  const [showPopup, setShowPopup] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showSplash, setShowSplash] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);
  const navigate = useNavigate();

  const handleClosePopup = () => setShowPopup(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("submitting...");
    try {
      
      await addDoc(collection(db, "users"), { 
        name,
        phone
      });
      toast.success("successfully submitted! 🎉", {id: toastId});
      setName("");
      setPhone("");
      setShowPopup(false)
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("something went wrong...", {id: toastId});
    }
  };


  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      const name = user.email.split("@")[0];
      setUsername(name);
    }
  }, []);

  const handleNavigation = (path) => {
    setShowSplash(true);
    setRedirectPath(path);
    setTimeout(() => {
      setShowSplash(false);
      if (path.startsWith("http")) {
        window.location.href = path;
      } else {
        navigate(path);
      }
    }, 5000);
  };

 useEffect(()=>{
    setShowPopup(true)
 }, [])

  return (
    <div className="home-container">
      {/* Splash Screen */}
      {showSplash && (
        <div className="splash-screen">
          <h2>Loading...</h2>
          <p>Get ready for exclusive deals and rewards!</p>
        </div>
      )}

      {/* Popup Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Enter Details to Play</h2>
            <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Enter your phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <div className="popup-buttons">
        <button type="submit">Submit</button>
      <button className="close-btn" type="reset" onClick={handleClosePopup}>Skip</button>
        
      </div>
    </form>
          </div>
        </div>
      )}

      {/* Homepage Content */}
      <div className="home-content">
      <h1>Welcome {username ? username : ""} to Deal Grabber</h1>
        <p>Spin to win amazing Deals & Discounts from Dealopoly.</p>
        <p>Dealopoly is your super search engine for local offers in your area.</p>

        {/* Spin-to-Win Placeholder */}
        <div className="spin-game">
          <SpinWheel prizes={prizes}/>
        </div>

        {/* Download to Home Screen Prompt */}
        <button className="download-btn">Add to Home Screen</button>

        {/* Navigation Buttons */}
        <div id="nav-buttons">
          <button onClick={() => navigate("/dealopoly")}>Dealopoly</button>
          <button onClick={() => navigate("/localopoly")}>Deal Pages</button>
          <button onClick={() => navigate("/partners")}>Partners</button>
          <button onClick={() => navigate("/about")}>About</button>
          {/* <button onClick={() => handleNavigation("/about")}>About Us</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
