import React from "react";
import "./ContactUS.css";

const ContactUS = () => {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 align-self-center">
            <div className="left-text">
              <div className="section-heading">
                <h6>Contact Us</h6>
                <h2>Let us answer any questions</h2>
              </div>
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-location-dot pe-1"></i> Address
                  </span>
                  <a href="#">Maddi Boulevard, Toronto, Ontario</a>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-phone pe-1"></i> Phone
                  </span>
                  <a href="tel:+201033993202">010 33 99 3202</a>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-envelope pe-1"></i> Email
                  </span>
                  <a href="mailto:ahmedmahmoud9621@gmail.com">
                    ahmedmahmoud6921@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-content">
              <div className="row">
                <div className="col-lg-12">
                  <form id="contact-form" action="" method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            type="text"
                            name="first"
                            id="first"
                            placeholder="Your First Name"
                            autoComplete="on"
                            aria-label="First Name"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            type="text"
                            name="last"
                            id="last"
                            placeholder="Your Last Name"
                            autoComplete="on"
                            aria-label="Last Name"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your E-mail"
                            aria-label="Email"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone Number"
                            autoComplete="on"
                            aria-label="Phone Number"
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            aria-label="Your Message"
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="orange-button"
                          >
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
