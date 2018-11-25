import React from 'react';
import Section from '../../../components/Section/Section';
import WebServices from '../../../components/Services/categories/WebServices/WebServices';
import WebFeatures from '../../../components/Services/features/WebFeatures/WebFeatures';
import Header from '../../../components/Header/Header';

const WebsiteDesign = (props) => {
  return (
    <div className="WebsiteDesign">
      <Header theme="clear" />

      <Section bg="#fff" padding="100px 100px 200px 100px">
        <WebServices />
      </Section>
      <Section bg="#eee">
        <WebFeatures />
      </Section>
    </div>
  )
};

export default WebsiteDesign;
