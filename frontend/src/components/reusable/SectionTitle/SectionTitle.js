import React from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
  const title = props.title || props.children;
  return (
    <h3 className="SectionTitle">{ title }</h3>
  );
};

export default SectionTitle;
