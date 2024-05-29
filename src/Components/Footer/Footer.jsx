import React from 'react'
import './Footer.css'

function Footer({scrollToSection}) {
  return (
    <div className='footer'>
      <p className='medicalCityFooter'>Medical City</p>
      
      <div>
        <p className='indice' onClick={() => scrollToSection('what-we-do')}>What we do</p>
        <p className='indice' onClick={() => scrollToSection('contact')}>Contact us</p>
      </div>

      <p className='copyright'>Copyright © 2024 Medical City PV <br />
      WhatsApp 322-130-3534 - All Rights Reserved.</p>
    </div>
  )
}

export default Footer