import React from 'react';
import './SectionIcon.css';

const SectionIcon = (props) => {
  if (!props.icon) return null;
  return (
    <div className="SectionIcon" data-icon={props.icon} />
  );
};

export default SectionIcon;
