import React from 'react';
import './SectionDescription.css';

const SectionDescription = (props) => {
  return (
    <p className="SectionDescription">{ props.children }</p>
  );
};

export default SectionDescription;
