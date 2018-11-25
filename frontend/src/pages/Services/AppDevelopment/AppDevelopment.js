import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import Section from '../../../components/Section/Section';
import AppServices from '../../../components/Services/categories/AppServices/AppServices';
import AppFeatures from '../../../components/Services/features/AppFeatures/AppFeatures';

const AppDevelopment = () => {
  return (
    <div className="AppDevelopment">
      <Header theme="clear" />

      <Section bg="#fff" padding="100px 100px 200px 100px">
        <AppServices />
      </Section>
      <Section bg="#eee">
        <AppFeatures />
      </Section>
    </div>
  );
}

export default AppDevelopment;
