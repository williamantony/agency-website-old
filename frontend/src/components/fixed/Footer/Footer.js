import React, { Component } from 'react';
import './Footer.css';
import Section from '../../reusable/Section/Section';
import FooterSocialLinks from '../FooterSocialLinks/FooterSocialLinks';

class Footer extends Component {

  render() {
    return (
      <div className="Footer">

        <div className="FooterLinks">
          <div className="FooterLinks__wrapper">
            <div className="FooterLinks__logo">
              <div className="FooterLinks__column__logo"></div>
            </div>
            <div className="FooterLinks__column">
              <div className="FooterLinks__column__link FooterLinks__column__link--head">About Us</div>
              <div className="FooterLinks__column__link">Our Methodology</div>
              <div className="FooterLinks__column__link">Pricing / Offers</div>
              <div className="FooterLinks__column__link">Join our team</div>
              <div className="FooterLinks__column__link">Become and Agent</div>
            </div>
            <div className="FooterLinks__column">
              <div className="FooterLinks__column__link FooterLinks__column__link--head">Services</div>
              <div className="FooterLinks__column__link">Website / App Development</div>
              <div className="FooterLinks__column__link">SEO / Marketing</div>
              <div className="FooterLinks__column__link">Branding / Social Media</div>
              <div className="FooterLinks__column__link">Logo / Graphic Design</div>
            </div>
            <div className="FooterLinks__column">
              <div className="FooterLinks__column__link FooterLinks__column__link--head">Support</div>
              <div className="FooterLinks__column__link">New Service Request</div>
              <div className="FooterLinks__column__link">Maintainance Request</div>
              <div className="FooterLinks__column__link">Chat Support</div>
              <div className="FooterLinks__column__link">Email Support</div>
            </div>
          </div>
        </div>

        <FooterSocialLinks />

        <div className="FooterNote">
          <div className="FooterNote__wrapper">
            <div className="FooterNote__note">
              All Rights Reserved &copy; { new Date().getFullYear() }<br />
              Willsquad is a registered trademark of Willsquad Corporation.
              <div className="FooterNote__links">
                <a href="#">Terms</a>/
                <a href="#">Privacy</a>/
                <a href="#">Sitemap</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default Footer;
