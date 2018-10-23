import React from 'react';
import './MainServicesItem.css';

const MainServicesItem = (props) => {
  const {
    id,
    name,
    description,
  } = props;

  return (
    <div className="MainServicesItem" data-id={id}>
      <div className="MainServicesItem__content">
        <div className="MainServicesItem__icon" />
        <div className="MainServicesItem__text">
          <div className="MainServicesItem__name">{ name }</div>
          <div className="MainServicesItem__description">{ description }</div>
        </div>
      </div>
    </div>
  );

}

export default MainServicesItem;
