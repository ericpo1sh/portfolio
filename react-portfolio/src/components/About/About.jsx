import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div className='about' id="about">
      <div className='about-title'>
        <h1>About me</h1>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt=''></img>
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>Dynamic and highly motivated Software Engineer with extensive experience from Atlas School. Proficient in
            both front-end and back-end development, with strong skills in Python, JavaScript, TypeScript, and frameworks
            like Bootstrap and React</p>
            <p>Adept at designing, developing, and deploying scalable software solutions. Exceptional
            communicator with a proven ability to work effectively both independently and as part of a collaborative team.
            Committed to continuous learning and innovation to deliver high-quality software products.</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"80%"}}></hr></div>
            <div className='about-skill'><p>JavaScript</p><hr style={{width:"70%"}}></hr></div>
            <div className='about-skill'><p>Python</p><hr style={{width:"70%"}}></hr></div>
            <div className='about-skill'><p>React.js</p><hr style={{width:"60%"}}></hr></div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr></hr>
        <div className='about-achievement'>
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr></hr>
        <div className='about-achievement'>
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
