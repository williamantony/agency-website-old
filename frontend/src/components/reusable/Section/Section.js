import React from 'react';
import './Section.css';

const Section = (props) => {
  const SectionStyle = {
    backgroundColor: props.bg,
  };

  if (props.padding) {
    SectionStyle.padding = props.padding;
  }

  return (
    <section className="Section" style={SectionStyle}>
      <div className="wrapper max-width--1500px">
        { props.children }
      </div>
    </section>
  );
};

export default Section;
