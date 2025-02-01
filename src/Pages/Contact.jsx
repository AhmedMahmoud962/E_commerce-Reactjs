import React from 'react'
import Background from '../Components/Background/Background'
import ContactImage from '../assets/background/contact.jpg'
import ContactUS from '../Components/ContactUs/ContactUS'
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us page" />
      </Helmet>
      <Background
        backgroundImg={ContactImage}
        title="Contact Us"
        text="Get in Touch"
      />
      <ContactUS />
    </>
  )
}

export default Contact
