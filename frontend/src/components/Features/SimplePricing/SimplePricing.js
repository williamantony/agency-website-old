import React from 'react';
import './SimplePricing.css';
import PricingTypes from './components/PricingTypes/PricingTypes';

const SimplePricing = () => {
  return (
    <div className="SimplePricing">
      <div className="SimplePricing__icon" />
      <div className="SimplePricing__title">Simple Pricing</div>
      <div className="SimplePricing__subtitle">
        Browser compatability test is one of the most important step in our development process.
        This ensures that your website will work on all the popular browsers in the same way as expected.  
      </div>
      <PricingTypes />
    </div>
  );
}

export default SimplePricing;
