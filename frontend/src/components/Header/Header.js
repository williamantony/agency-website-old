import React, { Component } from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import './Header.css';
import Hamburger from '../Hamburger/Hamburger';

class Header extends Component {

  render() {

    const { pathname } = this.props.location;

    return (
      <div className="Header">
        <div className="Header__bar-dupe" />
        <div className="Header__bar">
          <div className="Header__content">
            <Link to="/">
              <div className="Header__logo" />
            </Link>
            <nav className="Header__nav">
              <ul>
                <li data-selected={pathname === '/'}>
                  <NavLink to="/">
                    <span className="Header__nav__text">Home</span>
                    <div className="lines">
                      <div className="line" />
                      <div className="line" />
                      <div className="line" />
                    </div>
                  </NavLink>
                </li>
                <li data-selected={pathname === '/services'}>
                  <div className="line" />
                  <NavLink to="/services">
                    <span className="Header__nav__text">Services</span>
                    <div className="lines">
                      <div className="line" />
                      <div className="line" />
                      <div className="line" />
                    </div>
                  </NavLink>
                </li>
                <li data-selected={pathname === '/contact'}>
                  <div className="line" />
                  <NavLink to="/contact">
                    <span className="Header__nav__text">Contact Us</span>
                    <div className="lines">
                      <div className="line" />
                      <div className="line" />
                      <div className="line" />
                    </div>
                  </NavLink>
                </li>
                <li data-selected={pathname === '/about'}>
                  <div className="line" />
                  <NavLink to="/about">
                    <span className="Header__nav__text">About Us</span>
                    <div className="lines">
                      <div className="line" />
                      <div className="line" />
                      <div className="line" />
                    </div>
                  </NavLink>
                </li>
              </ul>
            <Hamburger />
            </nav>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(Header);
