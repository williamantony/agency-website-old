import React, { Component } from 'react';
import './Contact.css';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactForm from '../../components/ContactForm/ContactForm';

class Contact extends Component {

  render() {
    return (
      <div className="Contact">
        <div className="Contact__cover">
          <div className="Contact__cover__image" />
          <div className="Contact__cover__dark-layer" />
        </div>

        <section className="Contact__page-info">
          <div className="wrapper max-width--1500px">
            <div className="Contact__page-info__content">
              <h1 className="Contact__page-info__title">Contact</h1>
            </div>
          </div>
        </section>

        <section className="Contact__info">
          <div className="wrapper max-width--1500px">
            <ContactInfo />
          </div>
        </section>

        <section className="Contact__form">
          <div className="wrapper max-width--1500px">
            <ContactForm />
          </div>
        </section>
      </div>
    );
  }

}

export default Contact;
