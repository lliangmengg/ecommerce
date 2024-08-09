import React from 'react'
import './Hero.css'

function Hero(){
  const ScrollToSection = () => {
    // const sectionRef = useRef(null);
  
    // const handleScroll = () => {
    //   sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    // };
  
  return (
    <div className='hero'>
      <div className='hero-text'>
          <h1>New Clothes, New Passion.</h1>
          <p>Check out our new arrivals here!!</p>
          <button onClick={ScrollToSection} >New</button>
      </div>
      
    </div>
   
  )
}
}
export default Hero;
