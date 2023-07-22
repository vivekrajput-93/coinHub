import React from "react";
import "../CSS/Home.css";
import Hero from "../assets/hero-img.png";
import Earn from "./Earn";
import Featured from "./Featured";
import Footer from "./Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div div className="overflow">
    <div className="home">
      <div className="container">
        {/* Left side */}
        <div className="left">
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in CryptoCurrency with Your IRA</h1>
          <p>Buy, Sell and store hundreds of cryptocurrencies</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your Email" />
            <button id="btn">Learn More</button>
          </div>
        </div>
        {/* Right side */}
        <div className="right">
          <div className="img-container">
            <img src={Hero} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
    <Featured />
    <Earn />
    <Footer />
    </div>
  );
};

export default Home;
