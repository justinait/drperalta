import React from 'react'
import './WhatWeDo.css'

function WhatWeDo() {
    const services = [
      {image: '/service1.jpg', name: 'Medical consultation'},
      {image: '/service2.jpg', name: 'Laboratory'},
      {image: '/service3.jpg', name: 'Pharmacy'},
      {image: '/service4.jpg', name: 'Vaccines'},
      {image: '/service5.jpg', name: 'XRay'},
      {image: '/service6.jpg', name: 'Nursing'},
    ]
  return (
    <div className='whatContainer'>
      <p className='whatWeDotitle'>What we do</p>
      {
        services.map((e, i)=>{
          return <div key={i} className='whatItem'>
            <img src={e.image} alt="" className='whatImage' />
            <p className='whatName'>{e.name}</p>
          </div>
        })
      }
    </div>
  )
}

export default WhatWeDo