import React from 'react';
import Section from '../../../components/reusable/Section/Section';
import WebServices from '../../../components/fixed/Services/categories/WebServices/WebServices';
import WebFeatures from '../../../components/fixed/Services/features/WebFeatures/WebFeatures';
import Header from '../../../components/fixed/Header/Header';
import Page from '../../../components/reusable/Page/Page';

const WebsiteDesign = (props) => {
  return (
    <Page className="WebsiteDesign">
      <Header theme="light" />

      <Section bg="#fff" padding="100px 100px 200px 100px">
        <WebServices />
      </Section>
      <Section bg="#eee">
        <WebFeatures />
      </Section>
    </Page>
  )
};

export default WebsiteDesign;
