import React, { Component } from 'react';
import HeaderContent from './HeaderContent/HeaderContent';

const Header = (props) => (
  <HeaderContent themeName={props.theme} />
);

export default Header;
