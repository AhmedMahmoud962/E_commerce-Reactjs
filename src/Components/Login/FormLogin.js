import { Link } from "react-router-dom";
import "./FormLogin.css";
import Image from "../../assets/slider/slider4.webp";

function FormLogin() {
  return (
    <div className="wrapper-sign">
      <div className="inner inner-login">
        <div className="image-holder">
          <img src={Image} alt="Sign Up" loading="lazy" />
        </div>
        <form className="form form-login" action="#">
          <h3>
            Welcome Back!
            <br />
            <small> Please login to your account.</small>
          </h3>
          <div className="form-wrapper">
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
            />
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </div>

          <button type="submit" className="SignUp">
            Log In
          </button>
          <p>
            Don't have an account ?
            <Link className="link" to="/register">
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
