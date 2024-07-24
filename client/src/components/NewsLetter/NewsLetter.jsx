import React from 'react'
import './NewsLetter.css'

function NewsLetter (){
  return (
      <div className='NewsLetter'>

        <div className='NewsLetter-text'>
          <h1>Get Exclusive Offers On Your Email !! </h1>
          <p>Subscribe to our newsletter and stay updated!!</p>
        </div>

        <div className='Email'>
            <input type="email" placeholder='example@email.com'/>
            <button>Subscribe</button>
        </div>

      </div> 
    
    
  )
}

export default NewsLetter;

