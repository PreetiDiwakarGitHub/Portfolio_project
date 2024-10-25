import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="heading text-center">
          <h2>
            Contact <span>Us</span>
          </h2>
          <p>
            Have questions or feedback? Reach out to us through the form below,
            <br /> and we’ll get back to you promptly.
          </p>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="title">
              <h3>Contact Details</h3>
              <p>You can reach me via email or call me. I'm here to assist you!</p>
            </div>
            <div className="content">
              <div className="info">
                <i className="fas fa-mobile-alt"></i>
                <h4 className="d-inline-block">
                  NAME: <span>Preeti Diwakar</span>
                </h4>
              </div>
              <div className="info">
                <i className="fas fa-mobile-alt"></i>
                <h4 className="d-inline-block">
                  PHONE: <span>+91 8303435267</span>
                </h4>
              </div>
              <div className="info">
                <i className="far fa-envelope"></i>
                <h4 className="d-inline-block">
                  EMAIL: <span>preetidiwakar2309@gmail.com</span>
                </h4>
              </div>
              <div className="info">
                <i className="fas fa-map-marker-alt"></i>
                <h4 className="d-inline-block">
                  ADDRESS: <span>Kanpur (UP)</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-7"> {/* Use col-md-7 for the form container */}
            <form action="#" method="POST" className="contact-form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
