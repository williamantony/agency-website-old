import React from 'react';
import './Pricing.css';
import PricingTypes from './components/PricingTypes/PricingTypes';
import SectionIcon from '../SectionIcon/SectionIcon';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionDescription from '../SectionDescription/SectionDescription';
import SectionSummary from '../SectionSummary/SectionSummary';

const Pricing = () => {
  return (
    <div className="Pricing">
      <SectionSummary align="center">
        <SectionIcon icon="simple-pricing" />
        <SectionTitle title="Simple Pricing" />
        <SectionDescription>
          Browser compatability test is one of the most important step in our development process.
          This ensures that your website will work on all the popular browsers in the same way as expected.
        </SectionDescription>
      </SectionSummary>
      <PricingTypes />
    </div>
  );
}

export default Pricing;
