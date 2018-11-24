import React from 'react';
import './ServiceItem.css';

const ServiceItem = ({ name, title }) => {
  return (
    <div className="ServiceItem">
      <div className="ServiceItem__image" data-name={name} />
      <div className="ServiceItem__gradient" />
      <div className="ServiceItem__bg" />
      <div className="ServiceItem__content">
        <div className="ServiceItem__icon" />
        <div className="ServiceItem__title">{ title }</div>
      </div>
    </div>
  );
}

export default ServiceItem;
