import React, { useState } from 'react'

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `Hola, mi nombre es ${name} y mi consulta es: ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5213221303534&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='contactFormContainer'>

      <p className='whatWeDotitle'>Contact us</p>
      <form onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <label htmlFor="name" className={`floatingLabel ${name && 'floatingLabelActive'}`}>Name*</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            // placeholder='Name*' 
            className='inputContact'
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor="message" className={`floatingLabel floatingLabelMessage ${message && 'floatingLabelActive'}`}>Your message*</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
            // placeholder='Your message*' 
            className='inputContact inputContactMessage'
          />
        </div>
       <button className='button formButton'>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm