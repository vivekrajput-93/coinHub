import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CoinCard from './CoinCard';

const Coin = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en'


  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch ((error) => {
      console.log(error)
    }) 

  }, [])
  return (
    <>
    <CoinCard coins={coins} key={coins.id}/>
    </>
  )
}

export default Coin;