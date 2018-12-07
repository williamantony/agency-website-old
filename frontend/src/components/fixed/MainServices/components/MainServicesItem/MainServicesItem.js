import React from 'react';
import { Link } from 'react-router-dom';
import './MainServicesItem.css';

const MainServicesItem = (props) => {
  const {
    id,
    name,
    route,
    description,
  } = props;

  return (
    <div className="MainServicesItem" data-id={id}>
      <Link to={route} className="MainServicesItem__content">
        <div className="MainServicesItem__icon" />
        <div className="MainServicesItem__text">
          <div className="MainServicesItem__name">{ name }</div>
          <div className="MainServicesItem__description">{ description }</div>
        </div>
      </Link>
    </div>
  );

}

export default MainServicesItem;
