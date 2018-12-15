import React from 'react';
import './LandingServicesSectionSummary.css';
import Title from '../../../../reusable/Title/Title';

const LandingServicesSectionSummary = (props) => {
  const {
    title,
    description,
  } = props.summary;

  const titleStyle = {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '20px',
  };

  return (
    <React.Fragment>
      <Title tag="h2" style={titleStyle}>{ title }</Title>
      <div className="LandingServicesSectionSummary__description">{ description }</div>
    </React.Fragment>
  );

};

export default LandingServicesSectionSummary;
