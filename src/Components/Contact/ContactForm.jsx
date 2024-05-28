import React from 'react'

function ContactForm() {
  
  const handleInputChange = (e) =>{
    
  }
  return (
    <div className='contactFormContainer'>
      <p className='whatWeDotitle'>Contact us</p>
      <div>
        <input type="text" placeholder='Name*' className='inputContact' onChange={handleInputChange}/>
        <input type="email" placeholder='Email address*' className='inputContact' onChange={handleInputChange}/>
        <input type="text" placeholder='Subject*' className='inputContact' onChange={handleInputChange}/>
        <input type="text" placeholder='Your message*' className='inputContact inputContactMessage' onChange={handleInputChange}/>
      </div>
      <p className='button formButton'>Send Message</p>
    </div>
  )
}

export default ContactForm