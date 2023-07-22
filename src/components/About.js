import React, { useEffect } from "react";
import desk from "../assets/bit-phone.jpg";
import "../CSS/About.css";
import { useNavigate } from "react-router-dom";
import Trade from "../assets/trade.png";
import Footer from "./Footer";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLearn = () => {
    navigate("/");
  };

  return (
    <div className="main-section">
      <div className="drip">
        <div className="first">
          <h2 className="head">About Coin</h2>
          <p className="par">
            Welcome to CoinHub, your one-stop destination for all things
            cryptocurrency! We are passionate about providing you with the most
            reliable and up-to-date information on the ever-evolving world of
            digital currencies.
          </p>
          <div className="input-grp">
            <button id="btn" onClick={handleLearn} className="learn">
              See More
            </button>
          </div>
        </div>
        <div className="second">
          <img src={desk} alt="coin" />
        </div>
      </div>
      <div className="earn">
        <div className="container">
          {/* Left side */}

          <div className="left">
            <img src={Trade} alt="earn" />
          </div>
          {/* Right side */}
          <div className="right">
            <h2>What we Offer!</h2>
            <ul className="offer">
              <li>
                Real-time Market Data: Stay informed with live cryptocurrency
                prices, market capitalization, trading volume, and percentage
                changes for a vast array of digital assets.
              </li>
              <li>
                Comprehensive Coin Information: Dive deeper into each
                cryptocurrency's details with our comprehensive coin pages.
                Learn about their technology, use cases, team members,
                historical price data, and more.
              </li>
              <li>
                Exchange Rates: Convert cryptocurrency prices to various fiat
                currencies with our real-time exchange rate calculator. Easily
                see the equivalent value of your crypto holdings in your
                preferred fiat currency.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="get">
        <h1>Get in Touch !</h1>
        <p>
          We'd love to hear from you! If you have any questions, suggestions, or
          feedback, please don't hesitate to reach out to us. You can contact
          our support team through the "Contact Us" link in the footer or find us
          on social media.
        </p>
        <div className="input-container">
          <input id="btn" type="email" placeholder="Enter your Email" />
          <button id="btn">Learn More</button>
        </div>
        <p className="thank">
          Thank you for choosing CoinHub as your go-to crypto app. Happy
          investing!
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
