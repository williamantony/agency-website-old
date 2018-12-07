import React from 'react';
import Section from '../../../components/reusable/Section/Section';
import Header from '../../../components/fixed/Header/Header';
import Page from '../../../components/reusable/Page/Page';
import MarketingServices from '../../../components/fixed/Services/categories/MarketingServices/MarketingServices';

const Marketing = (props) => {
  return (
    <Page className="Marketing">
      <Header theme="light" />

      <Section bg="#fff" padding="100px 100px 200px 100px">
        <MarketingServices />
      </Section>
    </Page>
  )
};

export default Marketing;
