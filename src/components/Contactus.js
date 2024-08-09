import React from 'react';
import './Contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-header">
        <h1>CONTACT US</h1>
        <p>Need an expert? You are more than welcomed to leave your contact info and we will be in touch shortly</p>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3>VISIT US</h3>
          <p>Wood Avenue, Wood Towers 10th Floor</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <h3>CALL US</h3>
          <p>+254 707 987 543</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <h3>CONTACT US</h3>
          <p> marvelmovers@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
