import React from 'react'
import './Hero.css'

function Hero({ scrollToNewCollection }){
 
  return (
    <div className='hero'>
      <div className='hero-text'>
          <h1>New Clothes, New Passion.</h1>
          <p>Check out our new arrivals here!!</p>
          <button onClick={scrollToNewCollection} >New</button>
      </div>
      
    </div>
   
  )
}

export default Hero;
