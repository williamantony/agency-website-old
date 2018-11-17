import React from 'react';
import './CrossBrowserMockup.css';

const CrossBrowserMockup = (props) => {
  return (
    <div className="CrossBrowserMockup">
      <div className="CrossBrowserMockup__curve" />
      <div className="CrossBrowserMockup__header">
        <div className="CrossBrowserMockup__header__button" />
        <div className="CrossBrowserMockup__header__button" />
        <div className="CrossBrowserMockup__header__button" />
      </div>
      <div className="CrossBrowserMockup__content">{ props.children }</div>
    </div>
  );
};

export default CrossBrowserMockup;
