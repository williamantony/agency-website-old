import React from 'react';
import './Space.css';

const Space = (props) => (
  <div
    className="Space"
    style={{
      height: `${ 25 * (props.count || 1) }px`,
    }}
  />
);

export default Space;
