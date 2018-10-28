import React from 'react';
import './PopularPlatformItem.css';

const PopularPlatformItem = (props) => {
  const { name } = props;
  return (
    <div className="PopularPlatformItem" data-platform={name.toLowerCase()}>
      <div className="image">
        <div className="icon" />
      </div>
      <div className="name">{ name }</div>
    </div>
  );
};

export default PopularPlatformItem;