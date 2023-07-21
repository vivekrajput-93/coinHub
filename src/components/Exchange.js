import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import ExchangeCard from "./ExchangeCard";
import "../CSS/ExchangeCard.css";
import { ClockLoader } from "react-spinners";

function Exchange() {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchange(data);
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    };
    fetchExchange();
  }, []);

  return (
    <>
    <h1 className="title">EXCHANGE</h1>
    {loading ? (
        <div className="spinner-box">
          <ClockLoader />
        </div>
      ) : (
        <>
          <div className="exchange">
            {exchange.map((coin) => (
                <ExchangeCard
                key={coin.id}
                name={coin.name}
                img={coin.image}
                rank={coin.trust_score_rank}
                url={coin.url}
                country={coin.country}
                value = {coin.trade_volume_24h_btc.toLocaleString()}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Exchange;
