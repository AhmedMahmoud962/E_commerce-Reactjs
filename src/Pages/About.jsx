import React from 'react'
import Background from '../Components/Background/Background'
import AboutImage from '../assets/background/about-us-page-heading.jpg'
import SectionAbout from '../Components/About/SectionAbout'

const About = () => {
  return (
    <div>
      <Background
        backgroundImg={AboutImage}
        title="About Us"
        text="About Our Products"
      />
      <SectionAbout />
    </div>
  )
}

export default About
