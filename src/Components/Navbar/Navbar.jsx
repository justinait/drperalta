import React from 'react'
import './Navbar.css'

function Navbar({scrollToSection}) {
  return (
    <div className='navbarContainer'>
      <p className='medicalCity'>Medical City</p>
      
      <div className='buttonsNavbar'>
        <p className='button whatWeDoNavbar' onClick={() => scrollToSection('what-we-do')}>What we Do</p>
        <p className='button' onClick={() => scrollToSection('contact')}>Contact us</p>
      </div>
    </div>
  )
}

export default Navbar