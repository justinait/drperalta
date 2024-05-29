import React from 'react'
import hero from '/hero.jpg'
import './Hero.css'

function Hero({scrollToSection }) {
  return (
    <div className='heroContainer'>
      {/* <img src={hero} alt="" className='heroImage' /> */}
      <div className='heroBox'>
        <p className='heroTitle'>Need a doctor at home? Contact to Dr. Peralta </p>
        <p className='heroText'>Home doctor visits provide a convenient way to access healthcare services 
          without having to travel to a doctor's office or clinic.
        </p>
        <div className='buttonsHero'>
          <p className='button learnMore' onClick={() => scrollToSection('what-we-do')}>Learn More</p>
          <p className='button' onClick={() => scrollToSection('contact')}>Contact us</p>
        </div>
      </div>
      
    </div>
  )
}

export default Hero