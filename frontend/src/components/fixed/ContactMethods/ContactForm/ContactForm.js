import React, { Component } from 'react';
import './ContactForm.css';
import Input from '../../../reusable/Input/Input';
import CheckBox from '../../../reusable/CheckBox/CheckBox';
import Radio from '../../../reusable/Radio/Radio';
import Button from '../../../reusable/Button/Button';
import Label from '../../../reusable/Label/Label';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
    };
  }

  handleInput = (name, value) => {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.values);
  }

  handleClear = (event) => {
    event.preventDefault();
    this.setState({
      values: [],
    });
  }

  render() {
    return (
      <div className="ContactForm">
        <form className="ContactForm__form">
          <Label htmlFor="yourname">Your Name</Label>
          <div className="ContactForm__row">
            <Input
              id="yourname"
              type="text"
              name="person_name"
              placeholder="Your Name"
              value={this.state.values['person_name'] || ''}
              onChange={(value) => this.handleInput('person_name', value)}
            />
          </div>
          <div className="ContactForm__row">
            <Input
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={this.state.values['company_name'] || ''}
              onChange={(value) => this.handleInput('company_name', value)}
            />
          </div>
          <div className="ContactForm__divider" />
          <div className="ContactForm__row">
            <Input
              type="email"
              name="contact_email"
              placeholder="Email Address"
              value={this.state.values['contact_email'] || ''}
              onChange={(value) => this.handleInput('contact_email', value)}
            />
          </div>
          <div className="ContactForm__row">
            <Input
              type="tel"
              name="contact_phone"
              placeholder="Phone Number"
              value={this.state.values['contact_phone'] || ''}
              onChange={(value) => this.handleInput('contact_phone', value)}
            />
          </div>
          <div className="ContactForm__divider" />
          <div className="ContactForm__row">
            <Input
              type="textarea"
              name="message"
              placeholder="Message"
              value={this.state.values['message'] || ''}
              onChange={(value) => this.handleInput('message', value)}
            />
          </div>
          <div className="ContactForm__divider" />

          <div className="ContactForm__row">
            <CheckBox
              name="CheckBoxOption"
              value={this.state.values['services'] || ''}
              options={
                [
                  {
                    label: 'Website Design & Development',
                    value: 'webdesign',
                  },
                  {
                    label: 'Application Development',
                    value: 'appdevelop',
                  },
                  {
                    label: 'Logo Design & Branding',
                    value: 'branding',
                  },
                  {
                    label: 'SEO & Marketing',
                    value: 'seo',
                  }
                ]
              }
              onChange={(value) => this.handleInput('services', value)}
            />
          </div>
          <div className="ContactForm__divider" />
          
          <div className="ContactForm__row">
            <Radio
              name="RadioOptions"
              value={this.state.values['radio'] || ''}
              options={
                [
                  {
                    label: 'Are you happy?',
                    value: 1,
                  },
                  {
                    label: 'Are you sad?',
                    value: 2,
                  }
                ]
              }
              onChange={(value) => this.handleInput('radio', value)}
            />
          </div>
          <div className="ContactForm__divider" />
          <div className="ContactForm__row">
            <Button
              fontColor="#fff"
              bgColor="blue"
              onClick={this.handleSubmit}
            >Request Quote</Button>
            
            <Button
              fontColor="#fff"
              bgColor="grey"
              onClick={this.handleClear}
            >Clear</Button>
          </div>

        </form>
      </div>
    );
  }

}

export default ContactForm;
