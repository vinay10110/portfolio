import React from 'react'
import emailpic from '../assets/email.png'
import linked from '../assets/linkedin.png'
const Contact = () => {
  return (
       <div id='Contact'>
      <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailpic}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">vinaychakravarthi10110@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linked}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/vinaychakravarthi10110">LinkedIn</a></p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
