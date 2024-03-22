import React from 'react';
import './Contact.css'; // Import your CSS if it's defined in an external file
import img from '../assets/contact-img.png'; // Import your image

const ContactSection = () => {
  return (
    <section className="contactSection">
      <div className="contactformContainer">
        <h1 className="sectionHeader">Get in touch</h1>
        <form action="#" className="contactForm">
          <div>
            <input type="text" name="" id="" placeholder="full name" className="contactInput" />
            <input type="text" name="" id="" placeholder="Email" className="contactInput" />
          </div>
          <textarea name="" id="" cols="30" rows="5" placeholder="Message" className="contactInput"></textarea>
          <button type="submit" className="btn primaryBtn contactBtn">Submit</button>
        </form>
      </div>
      <div className="sectionPic bouncepic contactPic" id="sectionPic">
        <img src={ img } alt="" />
      </div>
    </section>
  );
};

export default ContactSection;
