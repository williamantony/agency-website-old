import React from 'react';
import './PopularBrowsers.css';

const PopularBrowsers = (props) => {
  return (
    <div className="PopularBrowsers">
      <div className="PopularBrowsers__item" data-browser="chrome" />
      <div className="PopularBrowsers__item" data-browser="firefox" />
      <div className="PopularBrowsers__item" data-browser="safari" />
      <div className="PopularBrowsers__item" data-browser="edge" />
      <div className="PopularBrowsers__item" data-browser="opera" />
    </div>
  );
};

export default PopularBrowsers;