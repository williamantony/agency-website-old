import React, { Component } from 'react';
import './FooterSocialLinks.css';
import Section from '../../reusable/Section/Section';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

const FooterSocialLinks = (props) => {
  return (
    <Section bg="#f5f5f5" padding="100px 50px 100px 50px">
      <div className="FooterSocialLinks">
        <div className="FooterSocialLinks__title">Connect with us</div>
        <SocialMediaLinks />
      </div>
    </Section>
  );
}

export default FooterSocialLinks;
