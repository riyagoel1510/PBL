import React from 'react';
import './contactUs.css';
import phoneImage from '../assets/phone.png';
import mailImage from '../assets/mail.png';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>
        Contact Us
        <img src={phoneImage} alt="Phone" />
        <img src={mailImage} alt="Mail" />
      </h1>
      <div className="white-box">
        <h3>Report a Cyber Issue</h3>
        <p>
          People or organizations should report anomalous cyber activity and/or cyber incidents 24/7 to <a href="mailto:xyz@abc.com">xyz@abc.com</a> or <a href="tel:8858888588">88588-88588</a>.
        </p>
      </div>
      <div className="white-box">
        <h3>"If You See Something, Say Something"</h3>
        <p>
          If you see suspicious activity, please report it to your local police department.
        </p>
        <p>
          If you are experiencing an emergency, please call <a href="tel:100">100</a>.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
