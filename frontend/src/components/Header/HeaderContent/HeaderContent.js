import React, { Component } from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setThemeStyle } from '../../../redux/actions';
import './HeaderContent.css';
import Hamburger from '../../Hamburger/Hamburger';

class HeaderContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: props.themeName,
    };
    this.props.setThemeStyle(props.themeName);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.theme !== state.theme) {
      return {
        theme: props.theme,
      };
    }
    return null;
  }

  render() {
    console.log('Render');
    const { pathname } = this.props.location;

    return (
      <div className="Header" data-theme={this.props.theme}>
        <div className="Header__bar-dupe" />
        <div className="Header__bar">
          <div className="Header__gradient" />
          <div className="Header__content">
            <div className="Header__content__wrapper">
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
              </nav>
            </div>
          </div>
            <Hamburger />
        </div>
      </div>
    );
    
  }

};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = {
  setThemeStyle,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContent));
