import React from 'react';
import './Label.css';

const Label = (props) => (
  <label htmlFor={props.htmlFor} className="Label">
    {props.children}
  </label>
);

export default Label;
