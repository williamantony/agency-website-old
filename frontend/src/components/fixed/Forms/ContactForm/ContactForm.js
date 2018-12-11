import React, { Component } from 'react';
import './ContactForm.css';
import Input from '../../../reusable/Input/Input';
import Button from '../../../reusable/Button/Button';
import InputDivider from '../../../reusable/InputDivider/InputDivider';
import InputRow from '../../../reusable/InputRow/InputRow';

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
          <InputRow>
            <Input
              id="yourname"
              type="text"
              name="person_name"
              placeholder="Your Name"
              value={this.state.values['person_name'] || ''}
              onChange={(value) => this.handleInput('person_name', value)}
            />
          </InputRow>
          <InputDivider />
          <InputRow>
            <Input
              type="text"
              name="company"
              placeholder="Company Name"
              value={this.state.values['company'] || ''}
              onChange={(value) => this.handleInput('company', value)}
            />
          </InputRow>
          <InputRow>
            <Input
              type="text"
              name="website"
              placeholder="Website"
              value={this.state.values['website'] || ''}
              onChange={(value) => this.handleInput('website', value)}
            />
          </InputRow>
          <InputDivider />
          <InputRow>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={this.state.values['email'] || ''}
              onChange={(value) => this.handleInput('email', value)}
            />
          </InputRow>
          <InputRow>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={this.state.values['phone'] || ''}
              onChange={(value) => this.handleInput('phone', value)}
            />
          </InputRow>
          <InputDivider />
          <InputRow>
            <Input
              type="textarea"
              name="message"
              placeholder="Message"
              value={this.state.values['message'] || ''}
              onChange={(value) => this.handleInput('message', value)}
            />
          </InputRow>
          <InputRow>
            <Button
              fontColor="#fff"
              bgColor="blue"
              onClick={this.handleSubmit}
            >Send Message</Button>
            
            <Button
              fontColor="#fff"
              bgColor="grey"
              onClick={this.handleClear}
            >Clear</Button>
          </InputRow>
        </form>
      </div>
    );
  }

}

export default ContactForm;
