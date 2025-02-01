import React from 'react'
import Background from '../Components/Background/Background'
import ContactImage from '../assets/background/contact.jpg'
import ContactUS from '../Components/ContactUs/ContactUS'

const Contact = () => {
  return (
    <>
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
