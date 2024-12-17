import React from 'react'
import './Hero.css'
import profile_img from '../../assets/template_prof_pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Dzyk-Eric-FSResume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Me" width={320} height={320}></img>
      <h1><span>Hi, I'm Eric Dzyk,</span> Software Engineer based in the USA.</h1>
      <p>Dynamic and highly motivated Software Engineer with extensive experience from Atlas School. Proficient in
      both front-end and back-end development.</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' href='#contact'>Connect with me</AnchorLink></div>
        <a href={resume} className='hero-resume-link'>
          <div className='hero-resume'>
            My Resume
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero
