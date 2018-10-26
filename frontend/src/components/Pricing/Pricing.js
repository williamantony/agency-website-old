import React, { Component } from 'react';
import './Pricing.css';
import PricingAdvantages from './components/PricingAdvantages/PricingAdvantages';

class Pricing extends Component {

  render() {
    return (
      <div className="Pricing">
        <div className="Pricing__icon" />
        <div className="Pricing__title">In-budget Pricing</div>
        <div className="Pricing__subtitle">
          Browser compatability test is one of the most important step in our development process.
          This ensures that your website will work on all the popular browsers in the same way as expected.  
        </div>
        <PricingAdvantages />
      </div>
    );
  }

}

export default Pricing;
