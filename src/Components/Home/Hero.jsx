import React from 'react'
import hero from '/hero.jpg'
import './Hero.css'

function Hero() {
  return (
    <div>
        <img src={hero} alt="" className='heroImage' />
    </div>
  )
}

export default Hero