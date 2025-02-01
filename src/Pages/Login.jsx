import React from 'react'
import FormLogin from '../Components/Login/FormLogin'
import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Helmet>
      <FormLogin />
    </>
  )
}

export default Login
