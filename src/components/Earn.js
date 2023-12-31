import React from 'react'
import Trade from "../assets/trade.png";
import "../CSS/Earn.css";

const Earn = () => {
  return (
    <div className='earn'>
        <div className='container'>
            {/* Left side */}

            <div className='left'>
                <img src={Trade} alt='earn' />
            </div>
            {/* Right side */}
            <div className='right'>
                <h2>Earn passive income with crypto.</h2>
                <p>Earn upto 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your Email' />
                    <button id='btn'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Earn