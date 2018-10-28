import React from 'react';
import './PopularPlatforms.css';
import PopularPlatformItem from '../PopularPlatformItem/PopularPlatformItem';

const PopularPlatforms = (props) => {
  return (
    <div className="PopularPlatforms">
      <PopularPlatformItem name="Windows" />
      <PopularPlatformItem name="iOS" />
      <PopularPlatformItem name="Android" />
      <PopularPlatformItem name="Linux" />
    </div>
  );
};

export default PopularPlatforms;
