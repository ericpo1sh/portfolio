import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={footer_logo} width={'109px'} length={'57px'} alt=''></img>
          <p>Dynamic and highly motivated Software Engineer with extensive experience from Atlas School. Proficient in both front-end and back-end development.</p>
        </div>
      </div>
      <hr></hr>
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2024 Eric Dzyk. All right reserved.</p>
        <div className='footer-bottom-right'>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
