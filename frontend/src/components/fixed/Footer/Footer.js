import React, { Component } from 'react';
import './Footer.css';
import FooterSocialLinks from '../FooterSocialLinks/FooterSocialLinks';
import FooterNote from './components/FooterNote/FootNote';
import FooterLinks from './components/FooterLinks/FooterLinks';

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <FooterLinks />        

        <FooterSocialLinks />

        <FooterNote />

      </div>
    );
  }

}

export default Footer;
