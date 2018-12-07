import React, { Component } from 'react';
import './Landing.css';
import Header from '../../components/fixed/Header/Header';
import LandingCover from '../../components/fixed/LandingCover/LandingCover';
import Section from '../../components/reusable/Section/Section';
import Services from '../../components/fixed/Services/Services';
import ConsumerTypes from '../../components/fixed/ConsumerTypes/ConsumerTypes';
import ContactForm from '../../components/fixed/ContactMethods/ContactForm/ContactForm';
import Page from '../../components/reusable/Page/Page';

class Landing extends Component {

  render() {
    return (
      <Page className="Landing">
        <Header theme="clear" />

        <LandingCover />

        <Section bg="#f5f5f5" padding="100px 100px">
          <Services />
        </Section>

        <Section bg="#fff" padding="100px 100px">
          <ConsumerTypes />
        </Section>

        <Section bg="#eee">
          <ContactForm />
        </Section>
      </Page>
    );
  }

}

export default Landing;
