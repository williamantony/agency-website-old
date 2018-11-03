import React from 'react';
import './PricingTypes.css';

const PricingTypes = () => {
  return (
    <div className="PricingTypes">
      <div className="PricingTypes__item">
        <div className="PricingTypes__item__summary">
          <div className="PricingTypes__item__name">Standard</div>
          <div className="PricingTypes__item__description">
            Choose our services available in various prices.
            Best for non-profit & home-based businesses.
          </div>
        </div>
        <div className="PricingTypes__item__action">
          <div className="PricingTypes__item__action__button">See Our Packages</div>
        </div>
      </div>
      <div className="PricingTypes__item" data-type="premium">
        <div className="PricingTypes__item__summary">
          <div className="PricingTypes__item__name">Premium</div>
          <div className="PricingTypes__item__description">
            Custom pricing based on your unique needs.
            Best for clients with higher expectations.
          </div>
        </div>
        <div className="PricingTypes__item__action">
          <div className="PricingTypes__item__action__button">Get Your Quote</div>
        </div>
      </div>
    </div>
  );
};

export default PricingTypes;
