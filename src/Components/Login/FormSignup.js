import { Link } from "react-router-dom";
import "./FormLogin.css";
import Image from "../../assets/background/login.jpg";

function FormSignup() {
  return (
    <div className="wrapper-sign">
      <div className="inner inner-signup">
        <div className="image-holder">
          <img src={Image} alt="Sign Up" />
        </div>
        <form className="form" action="#">
          <h3>
            Registration Form <br />
            <small>Create a new account to get started .</small>
          </h3>

          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
            />
            
          </div>
          <div className="form-wrapper">
            <input
              type="email"
              placeholder="Email Address"
              className="form-control"
            />
          
          </div>
          <div className="form-wrapper">
            <select className="form-control">
              <option value="" disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control"
            />
          </div>
          <button type="submit" className="SignUp">
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link className="link" to="/login">
              {" "}
              Log In{" "}
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default FormSignup;
