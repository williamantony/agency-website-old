import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForm } from '../../redux/actions';
import './ContactForm.css';
import Input from '../Input/Input';

class ContactForm extends Component {
  componentWillMount() {
    this.props.createForm('ContactForm');
  }

  render() {
    return (
      <div className="ContactForm">
        <h2>Let's Chat!</h2>
        <form>
          <div className="ContactForm__row">
            <Input
              type="text"
              form="ContactForm"
              name="personName"
              label="Full Name"
              placeholder="e.g. John Smith"
            />
          </div>
          <div className="ContactForm__row">
            <Input
              type="text"
              form="ContactForm"
              name="company"
              label="Company Name"
              placeholder="e.g. ABC Corporation"
            />
          </div>
          <div className="ContactForm__row">
            <Input
              type="email"
              form="ContactForm"
              name="emailAddress"
              label="Email Address"
              placeholder="e.g. email@example.com"
            />
          </div>
          <div className="ContactForm__row">
            <Input
              type="textarea"
              form="ContactForm"
              name="message"
              label="Enquiry"
              placeholder="Your message goes here"
            />
          </div>
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  createForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
