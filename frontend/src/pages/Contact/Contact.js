import React, { Component } from 'react';
import './Contact.css';
import Header from '../../components/fixed/Header/Header';
import Section from '../../components/reusable/Section/Section';
import ContactForm from '../../components/fixed/ContactMethods/ContactForm/ContactForm';
import SectionTitle from '../../components/reusable/SectionTitle/SectionTitle';
import Page from '../../components/reusable/Page/Page';

class Contact extends Component {

  render() {
    return (
      <Page className="Contact">
        <Header theme="light" />
        

        <Section bg="#eee">
          <SectionTitle title="Contact" />
          <ContactForm />
        </Section>

      </Page>
    );
  }

}

export default Contact;
