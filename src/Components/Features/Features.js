import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faCheckCircle,
  faWallet,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <FontAwesomeIcon icon={faShippingFast} className="feature-icon" />
        <div>
          <h3>Free Shipping</h3>
          <p>Free Shipping On All Orders</p>
        </div>
      </div>

      <div className="feature">
        <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
        <div>
          <h3>Safe Money</h3>
          <p>30 Days Money Back</p>
        </div>
      </div>

      <div className="feature">
        <FontAwesomeIcon icon={faWallet} className="feature-icon" />
        <div>
          <h3>Secure Payment</h3>
          <p>All Payment Secure</p>
        </div>
      </div>

      <div className="feature">
        <FontAwesomeIcon icon={faHeadset} className="feature-icon" />
        <div>
          <h3>Online Support 24/7</h3>
          <p>Technical Support 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
