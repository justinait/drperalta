import React from 'react'
import './Contact.css'
import phone from '/iconPhone.png'
import location from '/iconLocation.png'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className='contactPageContainer' id='contact'>
      <div className='contactPageOne'>

        <p className='contactHeroTitle'>Home medical care just a click away. <strong>Schedule your visit today.</strong> </p>

        <div className='divIcons'>
          <img src={phone} alt="" />
          <p>+52 3221303534</p>
        </div>

        <div className='divIcons'>  
          <img src={location} alt="" />
          <p>City of Mexico</p>
        </div>

        <p className='subtitleContactHero'>At home medical service 24/7 to:</p>
        <ul>
          <li>Mismaloya</li>
          <li>Puerto Vallarta</li>
          <li>Nuevo Vallarta</li>
          <li>Bucerias</li>
          <li>La Cruz</li>
          <li>Sayulita</li>
        </ul>
      </div>

      <ContactForm/>
    </div>
  )
}

export default Contact