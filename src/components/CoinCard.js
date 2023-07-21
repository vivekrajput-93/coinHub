import React, {useState} from "react";
import CoinItem from "./CoinItem";
import "../CSS/CoinCard.css";
import CoinInfo from "./CoinInfo";
import { Link } from "react-router-dom";

const CoinCard = (props) => {

  return (
    <div className="container">
      <div className="heading">
        <p>#</p>
        <p className="coin-name">Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Mkt Caps</p>
      </div>
          {props.coins.map((coins) => {
            return (
              <Link
                to={`/coinInfo/${coins.id}`}
                element={<CoinInfo />}
                key={coins.id}
              >
                <CoinItem coins={coins} />
              </Link>
            );
          })}
        </div>
  );
};

export default CoinCard;
