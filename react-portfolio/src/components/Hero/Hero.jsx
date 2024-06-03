import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=""></img>
      <h1><span>Hi, I'm Eric Dzyk,</span> Software Engineer based in the USA.</h1>
      <p>Dynamic and highly motivated Software Engineer with extensive experience from Atlas School. Proficient in
      both front-end and back-end development.</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
