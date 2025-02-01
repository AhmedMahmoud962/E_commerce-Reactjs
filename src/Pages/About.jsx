import React from 'react'
import Background from '../Components/Background/Background'
import AboutImage from '../assets/background/about-us-page-heading.jpg'
import SectionAbout from '../Components/About/SectionAbout'
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="About Our Products" />
      </Helmet>
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
