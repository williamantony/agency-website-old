import React from 'react';
import './CrossPlatformItem.css';

const CrossPlatformItem = (props) => {
  const { name } = props;
  return (
    <div className="CrossPlatformItem" data-platform={name.toLowerCase()}>
      <div className="image">
        <div className="icon" />
      </div>
      <div className="name">{ name }</div>
    </div>
  );
};

export default CrossPlatformItem;