import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SplashScreen from "./pages/SplashScreen"; // Import splash screen
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DealPages from "./pages/DealPages";
import UrbanEats from "./pages/UrbanEats";
import Mobilopoly from "./pages/Mobilopoly";
import Localopoly from "./pages/Localopoly";
import Dealopoly from "./pages/Dealopoly";
import { Toaster } from "react-hot-toast";import PartnersSplash from "./pages/Partners";
import DealDetails from "./pages/DealDetails";
import Foodopoly from "./pages/Foodopoly";
 'react-hot-toast'
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Show splash for 3 sec
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deals/:id" element={<DealDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deal-pages" element={<DealPages />} />
        <Route path="/urban-eats" element={<UrbanEats />} />
        <Route path="/mobilopoly" element={<Mobilopoly />} />
        <Route path="/foodopoly" element={<Foodopoly />} />
        <Route path="/localopoly" element={<Localopoly />} />
        <Route path="/dealopoly" element={<Dealopoly />} />
        <Route path="/partners" element={<PartnersSplash />} />
      </Routes>
    </Router>
    <Toaster/>
    </>
  );
};

export default App;
