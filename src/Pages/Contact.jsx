import React from 'react'
import Background from '../Components/Background/Background'
import ContactImage from '../assets/background/contact.jpg'


const Contact = () => {
  return (
    <>
      <Background
        backgroundImg={ContactImage}
        title="Contact Us"
        text="Get in Touch"
      />
    </>
  )
}

export default Contact
