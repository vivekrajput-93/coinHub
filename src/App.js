import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import Coin from "./components/Coin"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CoinInfo from "./components/CoinInfo";
import About from "./components/About";
import Exchange from "./components/Exchange";
import React from "react";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/coinInfo" element={<CoinInfo />}> 
            <Route path=":coinId" element={<CoinInfo />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
