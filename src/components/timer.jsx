import React from 'react';
import { useState,useEffect } from 'react'
import './timer.css'

const Timer = () => {

  
  const endDate = '22-04-2023 19:22'

  let Year = (`${endDate[6]}${endDate[7]}${endDate[8]}${endDate[9]}`)
  let Month = (`${endDate[3]}${endDate[4]}`)
  let Day = (`${endDate[0]}${endDate[1]}`)
  let Hours = (`${endDate[11]}${endDate[12]}`)
  let Minutes = (`${endDate[14]}${endDate[15]}`)
  let Seconds = 0

  const updEndDate = new Date(`${Year}-${Month}-${Day}T${Hours}:${Minutes}:00`)
  const DaysLeft = updEndDate - new Date()

  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
     const countdownInterval = setInterval(() => {
       setRemainingTime(calculateTimeRemaining());
     }, 1000);
 
     return () => clearInterval(countdownInterval);
   }, [remainingTime]);

   function calculateTimeRemaining() {

     if (DaysLeft < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
     const days = Math.floor(DaysLeft / (1000 * 60 * 60 * 24));
     const hours = Math.floor((DaysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((DaysLeft % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((DaysLeft % (1000 * 60)) / 1000);
     return { days, hours, minutes, seconds };
   }

  return (
    <div>
        <div className="app">
      <h1>BIG SALE ON LIFETIME PLAN</h1>
      <p>there is very little left</p>

      <div className="timer">

        <div className="days">
          <p className='value'>{remainingTime.days}</p>
          <p className='unit'>days</p>
        </div>
        <p className='line'>|</p>
        <div className="hours">
          <p className='value'>{remainingTime.hours}</p>
          <p className='unit'>hours</p>
        </div>
        <p className='line'>|</p>
        <div className="minutes">
          <p className='value'>{remainingTime.minutes}</p>
          <p className='unit'>minutes</p>
        </div>
        <p className='line'>|</p>
        <div className="seconds">
          <p className='value'>{remainingTime.seconds}</p>
          <p className='unit'>second</p>
        </div>

      </div>

    </div>
      
    </div>
  );
}

export default Timer;