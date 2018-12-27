import React from 'react';
import './FooterLinks.css';

const FooterLinks = (props) => {
  return (
    <div className="FooterLinks">
      <div className="FooterLinks__wrapper">
        <div className="FooterLinks__logo">
          <div className="FooterLinks__column__logo"></div>
        </div>
        <div className="FooterLinks__column">
          <div className="FooterLinks__column__link FooterLinks__column__link--head">
            <a href="#" className="FooterLinks__column__link__href FooterLinks__column__link__href--head">About Us</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">Our Methodology</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">Pricing / Offers</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">Join our team</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">Become and Agent</a>
          </div>
        </div>
        <div className="FooterLinks__column">
          <div className="FooterLinks__column__link FooterLinks__column__link--head">
            <a href="#" className="FooterLinks__column__link__href FooterLinks__column__link__href--head">Services</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">Website / App Development</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">SEO / Marketing</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">Branding / Social Media</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">Logo / Graphic Design</a>
          </div>
        </div>
        <div className="FooterLinks__column">
          <div className="FooterLinks__column__link FooterLinks__column__link--head">
            <a href="#" className="FooterLinks__column__link__href FooterLinks__column__link__href--head">Support</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">New Service Request</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">Maintainance Request</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">Chat Support</a>
          </div>
          <div className="FooterLinks__column__link">
            <a href="#" className="FooterLinks__column__link__href">Email Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
