import React from 'react';
import './SectionSummary.css';

const SectionSummary = (props) => {
  const align = props.align || 'left';
  return (
    <div className="SectionSummary" data-align={align}>{ props.children }</div>
  );
};

export default SectionSummary;
