import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person_name: '',
      company_name: '',
      contact_email: '',
      contact_phone: '',
      message: '',
    };
  }

  handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(name);
  }

  render() {
    return (
      <div className="ContactForm">
        <form className="ContactForm__form">
          <div className="ContactForm__row">
            <input
              className="ContactForm__input"
              type="text"
              name="person_name"
              placeholder="Your Name"
              value={this.state.person_name}
              onChange={this.handleInput}
            />
          </div>
          <div className="ContactForm__row">
            <input
              className="ContactForm__input"
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={this.state.company_name}
              onChange={this.handleInput}
            />
          </div>
          <div className="ContactForm__divider" />
          <div className="ContactForm__row">
            <input
              className="ContactForm__input"
              type="email"
              name="contact_email"
              placeholder="Email Address"
              value={this.state.contact_email}
              onChange={this.handleInput}
            />
          </div>
          <div className="ContactForm__row">
            <input
              className="ContactForm__input"
              type="tel"
              name="contact_phone"
              placeholder="Phone Number"
              value={this.state.contact_phone}
              onChange={this.handleInput}
            />
          </div>
          <div className="ContactForm__divider" />
          <div className="ContactForm__row">
            <textarea
              className="ContactForm__input"
              name="message"
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleInput}
            />
          </div>

        </form>
      </div>
    );
  }

}

export default ContactForm;
