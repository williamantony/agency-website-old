import React from 'react';
import Header from '../../../components/fixed/Header/Header';
import Section from '../../../components/reusable/Section/Section';
import AppServices from '../../../components/fixed/Services/categories/AppServices/AppServices';
import AppFeatures from '../../../components/fixed/Services/features/AppFeatures/AppFeatures';
import Page from '../../../components/reusable/Page/Page';

const AppDevelopment = () => {
  return (
    <Page className="AppDevelopment">
      <Header theme="light" />

      <Section bg="#fff" padding="100px 100px 200px 100px">
        <AppServices />
      </Section>
      <Section bg="#eee">
        <AppFeatures />
      </Section>
    </Page>
  );
}

export default AppDevelopment;
