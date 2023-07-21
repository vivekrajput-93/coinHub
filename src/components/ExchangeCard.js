import React from "react";
import "../CSS/ExchangeCard.css";

const ExhangeCard = ({ name, img, rank, url, country, value }) => {
  return (
    <>
    <div className="card">
      <div className="top">
        <a target="_blank" href={url}>
          <img src={img} width={50} height={50} alt="exchange" />
        </a>
      </div>
      <h5>{rank}</h5>
      <h3>{name}</h3>
      <p>${value}</p>
      <p>{country}</p>
    </div>
    </>
  );
};

export default ExhangeCard;
