import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Contact extends Component {
    render() {
      return (
      <div className="content" id="contact-section">
        <h2 className="content-head is-center">Get In Touch</h2>
        <div className="pure-g">
          <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
            <div>Please do not hesitate to contact me if you have any questions.</div>
            <ContactForm/>
          </div>

        </div>
      </div>
      )
    };
}
export default Contact;