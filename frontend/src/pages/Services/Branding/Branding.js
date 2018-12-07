import React from 'react';
import Section from '../../../components/reusable/Section/Section';
import Header from '../../../components/fixed/Header/Header';
import Page from '../../../components/reusable/Page/Page';
import BrandServices from '../../../components/fixed/Services/categories/BrandServices/BrandServices';

const Branding = (props) => {
  return (
    <Page className="Branding">
      <Header theme="light" />

      <Section bg="#fff" padding="100px 100px 200px 100px">
        <BrandServices />
      </Section>
    </Page>
  )
};

export default Branding;
