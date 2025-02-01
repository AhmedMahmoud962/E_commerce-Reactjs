import React from 'react'
import FormSignup from '../Components/Login/FormSignup.js';
import { Helmet } from "react-helmet-async";


const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register" />
      </Helmet>
      <FormSignup />
    </>
  )
}

export default Register ;
