import React from 'react';
import { Link } from 'react-router-dom';
import './LandingServicesItem.css';
import Button from '../../../../reusable/Button/Button';

const LandingServicesItem = (props) => {
  const {
    id,
    name,
    route,
    description,
    isOffWhite,
  } = props;

  return (
    <div className="LandingServicesItem" data-id={id}>
      <Link to={route} className={`LandingServicesItem__content ${ isOffWhite ? `LandingServicesItem__content--offwhite` : `` }`}>
        <div className="LandingServicesItem__icon" />
        <div className="LandingServicesItem__text">
          <div className="LandingServicesItem__name">{ name }</div>
          <div className="LandingServicesItem__description">{ description }</div>
        </div>
      </Link>
    </div>
  );

}

export default LandingServicesItem;
